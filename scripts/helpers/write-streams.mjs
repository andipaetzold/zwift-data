import { mkdir, readdir, unlink, writeFile } from "node:fs/promises";
import { join } from "node:path";
import prettier from "prettier";

export async function writeStreams(
  routes,
  segments,
  directory = "./src/streams",
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

    for (const [
      index,
      { slug, latlng, distanceStream, altitudeStream },
    ] of entries.entries()) {
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || slugs.has(slug)) {
        throw new Error(`Invalid or duplicate ${kind} slug: '${slug}'`);
      }
      slugs.add(slug);
      files.push([
        join(kind, `${slug}.ts`),
        `import type { StreamData } from "../types.js";
const stream: StreamData = ${JSON.stringify({
          latlng,
          distance: distanceStream,
          altitude: altitudeStream,
        })};
export default stream;
`,
      ]);
      imports.push(`import stream${index} from "./${kind}/${slug}.js";`);
      properties.push(`${JSON.stringify(slug)}: stream${index}`);
    }

    slugsByKind.set(kind, slugs);
    files.push([
      `${kind}.ts`,
      `import type { StreamData } from "./types.js";
${imports.join("\n")}
export const ${kind}: Readonly<Record<string, StreamData | undefined>> = {
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
