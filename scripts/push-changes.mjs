import simpleGit from "simple-git/promise.js";

const git = simpleGit();

const statusResult = await git.status();

if (statusResult.modified.length === 0) {
  console.log("Nothing changed");
  process.exit(0);
}

await git.add("src");
await git.commit("fix: update data from game dictionary");
await git.push();

console.log("Changes pushed");
