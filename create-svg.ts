import * as d3 from "d3";
import { JSDOM } from "jsdom";
import * as contrib from "./create-3d-contrib";
import * as util from "./utils";
import * as type from "./type";

const width = 1280;
const height = 850;

export const createSvg = (
  userInfo: type.UserInfo,
  settings: type.Settings,
  isForcedAnimation: boolean
): string => {
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

  contrib.addDefines(svg, settings);

  svg
    .append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("fill", settings.backgroundColor); // Safe to access backgroundColor

  // No more type checks needed here!
  contrib.create3DContrib(
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

  const sortedContributions = contributions.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  const bestContribution = sortedContributions.reduce((best, current) => {
    return current.contributionCount > best.contributionCount ? current : best;
  });

  const firstContributionDate = new Date(sortedContributions[0].date);
  const lastContributionDate = new Date(
    sortedContributions[sortedContributions.length - 1].date
  );

  const bestDate = new Date(bestContribution.date);
  const bestMonth = bestDate.toLocaleString("default", { month: "short" });
  const bestDay = bestDate.getDate();
  const bestCount = bestContribution.contributionCount;

  const firstMonth = firstContributionDate.toLocaleString("default", {
    month: "short",
  });
  const firstDay = firstContributionDate.getDate();
  const lastMonth = lastContributionDate.toLocaleString("default", {
    month: "short",
  });
  const lastDay = lastContributionDate.getDate();

  const group = svg.append("g");

  const titleBoxWidth = 250;
  const titleBoxHeight = 130;

  // Create a rectangle (box) for the title
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

  // Title Text
  group
    .append("text")
    .style("font-size", "18px")
    .style("font-weight", "bold")
    .attr("x", svgWidth - titleBoxWidth - 60)
    .attr("y", 75)
    .attr("text-anchor", "start")
    .attr("fill", "#fafafa")
    .text("Contributions");

  //contribution count
  group
    .append("text")
    .style("font-size", "36px")
    .attr("x", svgWidth - 280)
    .attr("y", 140)
    .attr("text-anchor", "start")
    .attr("fill", "#0D92F4")
    .text(util.inertThousandSeparator(userInfo.totalContributions));

  //total name
  group
    .append("text")
    .style("font-size", "16px")
    .style("font-weight", "bold")
    .attr("x", svgWidth - 280)
    .attr("y", 170)
    .attr("text-anchor", "start")
    .attr("fill", "#fafafa")
    .text("Total");

  //duration
  group
    .append("text")
    .style("font-size", "14px")
    .attr("x", svgWidth - 280)
    .attr("y", 190)
    .attr("text-anchor", "start")
    .attr("fill", "#dddddd")
    .text(`${firstMonth}-${firstDay} ${lastMonth}-${lastDay}`);

  group
    .append("text")
    .style("font-size", "36px")
    .attr("x", svgWidth - 160)
    .attr("y", 140)
    .attr("text-anchor", "start")
    .attr("fill", "#0D92F4")
    .text(bestCount);

  //total name
  group
    .append("text")
    .style("font-size", "16px")
    .style("font-weight", "bold")
    .attr("x", svgWidth - 160)
    .attr("y", 170)
    .attr("text-anchor", "start")
    .attr("fill", "#fafafa")
    .text("Best day");

  //duration
  group
    .append("text")
    .style("font-size", "14px")
    .attr("x", svgWidth - 160)
    .attr("y", 190)
    .attr("text-anchor", "start")
    .attr("fill", "#dddddd")
    .text(`${bestMonth}-${bestDay}`);

  return container.html();
};
