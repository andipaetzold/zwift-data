import simpleGit from "simple-git/promise.js";
import { updateData } from "./helpers/update-data.mjs";
import { Octokit } from "@octokit/rest";

const git = simpleGit();
git.addConfig("user.name", "Andi Pätzold [bot]");
git.addConfig("user.email", "github+bot@andipaetzold.com");

const BRANCH_NAME = "update-data";

const branchSummary = await git.branchLocal();
const newBranch = !branchSummary.all.includes(BRANCH_NAME);

if (newBranch) {
  console.log("Creating new branch");
  await git.checkoutLocalBranch(BRANCH_NAME);
} else {
  console.log("Checking out existing branch");
  await git.checkout(BRANCH_NAME);
  await git.pull();
}

await updateData();

const statusResult = await git.status();
if (statusResult.modified.length === 0) {
  console.log("Nothing changed");
  process.exit(0);
}

await git.add("src");
await git.commit("fix: update data from game dictionary");

console.log("Pushing changes");
await git.push(["-u", "origin", BRANCH_NAME]);
console.log("Changes pushed");

if (newBranch) {
  console.log("Creating PR");
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
  await octokit.pulls.create({
    owner: "andipaetzold",
    repo: "zwift-data",
    title: "fix: Update data",
    head: BRANCH_NAME,
    base: "main",
    body: "Automatically created PR",
  });
  console.log("PR created");
}
