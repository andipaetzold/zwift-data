import { writeFileSync } from 'fs';

export function writeData(data, name, typeName) {
  console.log(`Writing data: ${typeName}`);

  const content = `import { ${typeName} } from "./types";

// prettier-ignore
export const ${name}: ReadonlyArray<${typeName}> = ${JSON.stringify(data, undefined, 2)};
`;
  writeFileSync(`./src/${name}.ts`, content);
}