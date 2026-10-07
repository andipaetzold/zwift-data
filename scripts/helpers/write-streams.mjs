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
  const streamTypes = ["latlng", "distance", "altitude"];
  const streamSources = Object.fromEntries(
    streamTypes.map((type) => [type, []]),
  );

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
export const latlng: StreamData["latlng"] = ${JSON.stringify(latlng)};
export const distance: StreamData["distance"] = ${JSON.stringify(distanceStream)};
export const altitude: StreamData["altitude"] = ${JSON.stringify(altitudeStream)};
const stream: StreamData = { latlng, distance, altitude };
export default stream;
`,
      ]);
      imports.push(`import stream${index} from "./${kind}/${slug}.js";`);
      properties.push(`${JSON.stringify(slug)}: stream${index}`);
    }

    for (const type of streamTypes) {
      const imports = entries.map(
        ({ slug }, index) =>
          `import { ${type} as ${kind}${index} } from "./${kind}/${slug}.js";`,
      );
      const properties = entries.map(
        ({ slug }, index) => `${JSON.stringify(slug)}: ${kind}${index}`,
      );
      streamSources[type].push(`${imports.join("\n")}
export const ${kind}: Readonly<Record<string, StreamData["${type}"] | undefined>> = {
${properties.join(",\n")}
};`);
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

  for (const type of streamTypes) {
    files.push([
      `${type}.ts`,
      `import type { StreamData } from "./types.js";
${streamSources[type].join("\n")}
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
