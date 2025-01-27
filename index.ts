import * as core from "@actions/core";
import * as aggregate from "./aggregate-user-info";
import * as template from "./color-template";
import * as create from "./create-svg";
import * as f from "./file-writer";
import * as r from "./settings-reader";
import * as client from "./github-graphql";
import * as dotenv from "dotenv";
dotenv.config();

export const main = async (): Promise<void> => {
  try {
    const token = process.env.ACCESS_TOKEN;
    if (!token) {
      core.setFailed("GITHUB_TOKEN is empty");
      return;
    }
    const userName =
      3 <= process.argv.length ? process.argv[2] : process.env.USERNAME;
    if (!userName) {
      core.setFailed("USERNAME is empty");
      return;
    }
    const maxRepos = process.env.MAX_REPOS
      ? Number(process.env.MAX_REPOS)
      : 100;
    if (Number.isNaN(maxRepos)) {
      core.setFailed("MAX_REPOS is NaN");
      return;
    }

    const response = await client.fetchData(token, userName, maxRepos);
    const userInfo = aggregate.aggregateUserInfo(response);

    if (process.env.SETTING_JSON) {
      const settingFile = r.readSettingJson(process.env.SETTING_JSON);
      const settingInfos =
        "length" in settingFile ? settingFile : [settingFile];
      for (const settingInfo of settingInfos) {
        const fileName = settingInfo.fileName || "profile-customize.svg";
        const svgString = await create.createSvg(userInfo, settingInfo, false);
        await f.writeFile(fileName, svgString);
      }
    } else {
      const settings = userInfo.isHalloween
        ? template.HalloweenSettings
        : template.NormalSettings;

      const svgAnimate = await create.createSvg(userInfo, settings, true);
      await f.writeFile("profile-green-animate.svg", svgAnimate);

      const svgNormal = await create.createSvg(userInfo, settings, false);
      await f.writeFile("profile-green.svg", svgNormal);

      // Northern hemisphere
      const svgNorthAnimate = await create.createSvg(
        userInfo,
        template.NorthSeasonSettings,
        true
      );
      await f.writeFile("profile-season-animate.svg", svgNorthAnimate);

      const svgNorthNormal = await create.createSvg(
        userInfo,
        template.NorthSeasonSettings,
        false
      );
      await f.writeFile("profile-season.svg", svgNorthNormal);

      // Southern hemisphere
      const svgSouthAnimate = await create.createSvg(
        userInfo,
        template.SouthSeasonSettings,
        true
      );
      await f.writeFile("profile-south-season-animate.svg", svgSouthAnimate);

      const svgSouthNormal = await create.createSvg(
        userInfo,
        template.SouthSeasonSettings,
        false
      );
      await f.writeFile("profile-south-season.svg", svgSouthNormal);

      const svgNightView = await create.createSvg(
        userInfo,
        template.NightViewSettings,
        true
      );
      await f.writeFile("profile-night-view.svg", svgNightView);

      const svgNightGreen = await create.createSvg(
        userInfo,
        template.NightGreenSettings,
        true
      );
      await f.writeFile("profile-night-green.svg", svgNightGreen);

      const svgNightRainbow = await create.createSvg(
        userInfo,
        template.NightRainbowSettings,
        true
      );
      await f.writeFile("profile-night-rainbow.svg", svgNightRainbow);

      const svgGitBlock = await create.createSvg(
        userInfo,
        template.GitBlockSettings,
        true
      );
      await f.writeFile("profile-gitblock.svg", svgGitBlock);
    }
  } catch (error) {
    console.error(error);
    core.setFailed("error");
  }
};

void main();
