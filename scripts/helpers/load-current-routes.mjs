import { readFile } from "fs/promises";
import ts from "typescript";

export async function loadCurrentRoutes() {
  const source = await readFile("./src/routes.ts", "utf8");
  const javascript = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ES2022,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText;
  const moduleUrl = `data:text/javascript;base64,${Buffer.from(javascript).toString("base64")}`;

  return (await import(moduleUrl)).routes;
}
