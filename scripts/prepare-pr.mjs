import simpleGit from "simple-git";
import { updateData } from "./helpers/update-data.mjs";
import { Octokit } from "@octokit/rest";

const git = simpleGit();
await git.addConfig("user.name", "Andi Pätzold [bot]");
await git.addConfig("user.email", "github+bot@andipaetzold.com");

const BRANCH_NAME = "update-data";

const branchSummary = await git.branchLocal();
const newBranch = !branchSummary.all.includes(BRANCH_NAME);

if (newBranch) {
  console.log(`Creating new branch '${BRANCH_NAME}'`);
  await git.checkoutLocalBranch(BRANCH_NAME);
} else {
  console.log(`Checking out and pulling existing branch '${BRANCH_NAME}'`);
  await git.checkout(BRANCH_NAME);
  await git.pull();
}

await updateData();

const statusResult = await git.status();
if (statusResult.modified.length === 0) {
  console.log("Nothing changed");
  process.exit(0);
}

console.log(`${statusResult.modified.length} changes`);

console.log("Committing changes");
await git.add("src");
await git.commit("fix: update data from game dictionary");

console.log("Pushing changes");
await git.push(["-u", "origin", BRANCH_NAME]);
console.log("Changes pushed");

if (newBranch) {
  console.log("Creating PR");
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
  const pr = await octokit.pulls.create({
    owner: "andipaetzold",
    repo: "zwift-data",
    title: "fix: Update data",
    head: BRANCH_NAME,
    base: "main",
    body: "Automatically created PR",
  });
  console.log(`PR created: ${pr.data.url}`);
}
