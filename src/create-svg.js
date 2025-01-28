import * as d3 from "d3";
import { JSDOM } from "jsdom";
// import * as contrib from "./create-3d-contrib";

import { addDefines, create3DContrib } from "./create-3d-contrib.js";
import { inertThousandSeparator } from "./utils.js";

const width = 1280;
const height = 850;
export const createSvg = (userInfo, settings, isForcedAnimation) => {
  let svgWidth = width;
  let svgHeight = height;
  const fakeDom = new JSDOM(
    '<!DOCTYPE html><html><body><div class="container"></div></body></html>'
  );
  const container = d3.select(fakeDom.window.document).select(".container");
  const svg = container
    .append("svg")
    .attr("xmlns", "http://www.w3.org/2000/svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("viewBox", `0 0 ${svgWidth} ${svgHeight}`);
  svg
    .append("style")
    .html('* { font-family: "Ubuntu", "Helvetica", "Arial", sans-serif; }');
  addDefines(svg, settings);
  // background
  svg
    .append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("fill", settings.backgroundColor);
  // 3D-Contrib Calendar
  create3DContrib(
    svg,
    userInfo,
    0,
    0,
    width,
    height,
    settings,
    isForcedAnimation
  );
  const contributions = userInfo.contributionCalendar;
  const sortedContributions = contributions.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const lastContribution = sortedContributions[sortedContributions.length - 1];

  const lastContributionDate = new Date(lastContribution.date);

  const lastDate = lastContributionDate.toLocaleString("default", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const bestContribution = sortedContributions.reduce((best, current) =>
    current.contributionCount > best.contributionCount ? current : best
  );

  const bestDate = new Date(bestContribution.date);
  const bestMonth = bestDate.toLocaleString("default", { month: "short" });
  const bestDay = bestDate.getDate();
  const bestCount = bestContribution.contributionCount;

  const group = svg.append("g");
  const titleBoxWidth = 250;
  const titleBoxHeight = 130;

  // top right box
  group
    .append("rect")
    .attr("x", svgWidth - titleBoxWidth - 60)
    .attr("y", 90)
    .attr("width", titleBoxWidth)
    .attr("height", titleBoxHeight)
    .attr("fill", settings.backgroundColor)
    .attr("stroke", "#fafafa")
    .attr("stroke-width", 1)
    .attr("rx", 8)
    .attr("ry", 8);

  // top right box title
  group
    .append("text")
    .style("font-size", "18px")
    .style("font-weight", "bold")
    .attr("x", svgWidth - titleBoxWidth - 60)
    .attr("y", 75)
    .attr("text-anchor", "start")
    .attr("fill", "#fafafa")
    .text("Contributions");

  group
    .append("text")
    .style("font-size", "36px")
    .attr("x", svgWidth - 280)
    .attr("y", 140)
    .attr("text-anchor", "start")
    .attr("fill", settings.textColors)
    .text(inertThousandSeparator(userInfo.totalContributions));

  group
    .append("text")
    .style("font-size", "16px")
    .style("font-weight", "bold")
    .attr("x", svgWidth - 280)
    .attr("y", 170)
    .attr("text-anchor", "start")
    .attr("fill", "#fafafa")
    .text("Total");

  group
    .append("text")
    .style("font-size", "14px")
    .attr("x", svgWidth - 280)
    .attr("y", 190)
    .attr("text-anchor", "start")
    .attr("fill", "#dddddd")
    .text(`${lastDate}`);

  // Best day contribution
  group
    .append("text")
    .style("font-size", "36px")
    .attr("x", svgWidth - 160)
    .attr("y", 140)
    .attr("text-anchor", "start")
    .attr("fill", settings.textColors)
    .text(bestCount);

  group
    .append("text")
    .style("font-size", "16px")
    .style("font-weight", "bold")
    .attr("x", svgWidth - 160)
    .attr("y", 170)
    .attr("text-anchor", "start")
    .attr("fill", "#fafafa")
    .text("Best day");

  group
    .append("text")
    .style("font-size", "14px")
    .attr("x", svgWidth - 160)
    .attr("y", 190)
    .attr("text-anchor", "start")
    .attr("fill", "#dddddd")
    .text(`${bestMonth}-${bestDay}`);

  // bottom left box
  group
    .append("rect")
    .attr("x", 50)
    .attr("y", 700)
    .attr("width", 500)
    .attr("height", titleBoxHeight)
    .attr("fill", settings.backgroundColor)
    .attr("stroke", "#fafafa")
    .attr("stroke-width", 1)
    .attr("rx", 8)
    .attr("ry", 8);

  // Commit contribution
  group
    .append("text")
    .style("font-size", "36px")
    .attr("x", 80)
    .attr("y", 750)
    .attr("text-anchor", "start")
    .attr("fill", settings.textColors)
    .text(inertThousandSeparator(userInfo.totalCommitContributions));

  group
    .append("text")
    .style("font-size", "16px")
    .style("font-weight", "bold")
    .attr("x", 80)
    .attr("y", 780)
    .attr("text-anchor", "start")
    .attr("fill", "#fafafa")
    .text("Commit");

  group
    .append("text")
    .style("font-size", "14px")
    .attr("x", 80)
    .attr("y", 800)
    .attr("text-anchor", "start")
    .attr("fill", "#dddddd")
    .text(`${lastDate}`);

  // Issue contributions
  group
    .append("text")
    .style("font-size", "36px")
    .attr("x", 200)
    .attr("y", 750)
    .attr("text-anchor", "start")
    .attr("fill", settings.textColors)
    .text(inertThousandSeparator(userInfo.totalIssueContributions));

  group
    .append("text")
    .style("font-size", "16px")
    .style("font-weight", "bold")
    .attr("x", 200)
    .attr("y", 780)
    .attr("text-anchor", "start")
    .attr("fill", "#fafafa")
    .text("Issue");

  // total PullRequest contributions
  group
    .append("text")
    .style("font-size", "36px")
    .attr("x", 320)
    .attr("y", 750)
    .attr("text-anchor", "start")
    .attr("fill", settings.textColors)
    .text(inertThousandSeparator(userInfo.totalPullRequestContributions));

  group
    .append("text")
    .style("font-size", "16px")
    .style("font-weight", "bold")
    .attr("x", 300)
    .attr("y", 780)
    .attr("text-anchor", "start")
    .attr("fill", "#fafafa")
    .text("Pull Request");

  group
    .append("text")
    .style("font-size", "14px")
    .attr("x", 300)
    .attr("y", 800)
    .attr("text-anchor", "start")
    .attr("fill", "#dddddd")
    .text(`${lastDate}`);

  // total Fork contributions
  group
    .append("text")
    .style("font-size", "36px")
    .attr("x", 450)
    .attr("y", 750)
    .attr("text-anchor", "start")
    .attr("fill", settings.textColors)
    .text(inertThousandSeparator(userInfo.totalForkCount));

  group
    .append("text")
    .style("font-size", "16px")
    .style("font-weight", "bold")
    .attr("x", 450)
    .attr("y", 780)
    .attr("text-anchor", "start")
    .attr("fill", "#fafafa")
    .text("Fork");

  return container.html();
};
