import core from "@actions/core";
const aggregate = require("./aggregate-user-info");
const template = require("./color-template");
const create = require("./create-svg");
const f = require("./file-writer");
const client = require("./github-graphql");
import dotenv from "dotenv";
dotenv.config();

const main = async () => {
  try {
    const token = process.env.ACCESS_TOKEN;
    if (!token) {
      core.setFailed("GITHUB_TOKEN is empty");
      return;
    }
    const max = process.env.MAX_REPOS;
    const userName = process.env.USERNAME_TAG;
    if (!userName) {
      core.setFailed("USERNAME is empty");
      return;
    }
    const maxRepos = process.env.MAX_REPOS;

    if (Number.isNaN(maxRepos)) {
      core.setFailed("MAX_REPOS is NaN");
      return;
    }

    const response = await client.fetchData(token, userName, maxRepos);
    const userInfo = aggregate.aggregateUserInfo(response);

    f.writeFile(
      "profile-season.svg",
      create.createSvg(userInfo, template.NorthSeasonSettings, false)
    );

    f.writeFile(
      "profile-night-view.svg",
      create.createSvg(userInfo, template.NightViewSettings, true)
    );

    f.writeFile(
      "profile-night-green.svg",
      create.createSvg(userInfo, template.NightGreenSettings, true)
    );

    f.writeFile(
      "profile-gitblock.svg",
      create.createSvg(userInfo, template.GitBlockSettings, true)
    );
  } catch (error) {
    console.error(error);
    core.setFailed("error");
  }
};

main();
