import { mkdir, readdir, unlink, writeFile } from "node:fs/promises";
import { join } from "node:path";
import prettier from "prettier";

export async function writeCoordinates(
  routes,
  segments,
  directory = "./src/coordinates",
) {
  const files = [];
  const slugsByKind = new Map();

  for (const [kind, data] of Object.entries({ routes, segments })) {
    const entries = data
      .filter((entry) => entry.latlng !== undefined)
      .sort((a, b) => (a.slug < b.slug ? -1 : a.slug > b.slug ? 1 : 0));
    const slugs = new Set();
    const imports = [];
    const properties = [];

    for (const [index, { slug, latlng }] of entries.entries()) {
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || slugs.has(slug)) {
        throw new Error(`Invalid or duplicate ${kind} slug: '${slug}'`);
      }
      slugs.add(slug);
      files.push([
        join(kind, `${slug}.ts`),
        `import type { Coordinates } from "../types";
const coordinates: Coordinates = ${JSON.stringify(latlng)};
export default coordinates;
`,
      ]);
      imports.push(`import coordinates${index} from "./${kind}/${slug}.js";`);
      properties.push(`${JSON.stringify(slug)}: coordinates${index}`);
    }

    slugsByKind.set(kind, slugs);
    files.push([
      `${kind}.ts`,
      `import type { Coordinates } from "./types.js";
${imports.join("\n")}
export const ${kind}: Readonly<Record<string, Coordinates | undefined>> = {
${properties.join(",\n")}
};
`,
    ]);
  }

  // Prepare the complete snapshot before changing any committed data.
  const formatted = await Promise.all(
    files.map(async ([path, content]) => [
      path,
      await prettier.format(content, { parser: "typescript" }),
    ]),
  );
  for (const kind of slugsByKind.keys()) {
    await mkdir(join(directory, kind), { recursive: true });
  }
  for (const [path, content] of formatted) {
    await writeFile(join(directory, path), content);
  }
  for (const [kind, slugs] of slugsByKind) {
    for (const file of await readdir(join(directory, kind))) {
      if (file.endsWith(".ts") && !slugs.has(file.slice(0, -3))) {
        await unlink(join(directory, kind, file));
      }
    }
  }
}
