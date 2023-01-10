import { writeFileSync } from "fs";
import prettier from "prettier";

export function writeData(data, name, typeName) {
  console.log(`Writing data: ${typeName}`);

  const keys = [...new Set(data.flatMap((item) => Object.keys(item)))];
  const dataAsArray = data.map((item) => keys.map((key) => item[key]));

  const content = `import { ${typeName} } from "./types";

export const ${name}: ReadonlyArray<${typeName}> =
  (${JSON.stringify(dataAsArray).replace(/null/g, "undefined")} as const)
    .map(([${keys.join(",")}]) => ({${keys.join(",")}}));
`;
  writeFileSync(
    `./src/${name}.ts`,
    prettier.format(content, { parser: "typescript" })
  );
}
