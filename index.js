import core from "@actions/core";

// import template from "./color-template.js";
import { createSvg } from "./create-svg.js";
import { writeFile } from "./file-writer.js";

import dotenv from "dotenv";
import { fetchData } from "./github-graphql.js";
import { aggregateUserInfo } from "./aggregate-user-info.js";
import {
  GitBlockSettings,
  NightGreenSettings,
  NightViewSettings,
  NorthSeasonSettings,
} from "./color-template.js";

dotenv.config();

const main = async () => {
  try {
    const token = process.env.ACCESS_TOKEN;
    if (!token) {
      core.setFailed("GITHUB_TOKEN is empty");
      console.log(token);
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
    const response = await fetchData(token, userName, maxRepos);
    const userInfo = await aggregateUserInfo(response);

    writeFile(
      "profile-season.svg",
      createSvg(userInfo, NorthSeasonSettings, false)
    );
    writeFile(
      "profile-night-view.svg",
      createSvg(userInfo, NightViewSettings, true)
    );
    writeFile(
      "profile-night-green.svg",
      createSvg(userInfo, NightGreenSettings, true)
    );
    writeFile(
      "profile-gitblock.svg",
      createSvg(userInfo, GitBlockSettings, true)
    );
  } catch (error) {
    console.error(error);
    core.setFailed("error");
  }
};
main();
