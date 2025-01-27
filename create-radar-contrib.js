"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRadarContrib = void 0;
const util = __importStar(require("./utils"));
const rangeLabels = ['1', '10', '100', '1K', '10K'];
const levels = rangeLabels.length;
const radians = 2 * Math.PI;
const toLevel = (value) => {
    if (value < 1) {
        return 0.8;
    }
    const result = Math.log10(value);
    return Math.min(result, 5) + 1;
};
const createRadarContrib = (svg, userInfo, x, y, width, height, settings, isForcedAnimation) => {
    const radius = (height / 2) * 0.8;
    const cx = width / 2;
    const cy = (height / 2) * 1.1;
    const isAnimate = settings.growingAnimation || isForcedAnimation;
    const commitLabel = settings.l10n ? settings.l10n.commit : 'Commit';
    const issueLabel = settings.l10n ? settings.l10n.issue : 'Issue';
    const pullReqLabel = settings.l10n ? settings.l10n.pullreq : 'PullReq';
    const reviewLabel = settings.l10n ? settings.l10n.review : 'Review';
    const RepoLabel = settings.l10n ? settings.l10n.repo : 'Repo';
    const data = [
        {
            name: commitLabel,
            value: userInfo.totalCommitContributions,
        },
        {
            name: issueLabel,
            value: userInfo.totalIssueContributions,
        },
        {
            name: pullReqLabel,
            value: userInfo.totalPullRequestContributions,
        },
        {
            name: reviewLabel,
            value: userInfo.totalPullRequestReviewContributions,
        },
        {
            name: RepoLabel,
            value: userInfo.totalRepositoryContributions,
        },
    ];
    const total = data.length;
    const posX = (level, num) => util.toFixed(radius * (level / levels) * Math.sin((num / total) * radians));
    const posY = (level, num) => util.toFixed(radius * (level / levels) * -Math.cos((num / total) * radians));
    const group = svg
        .append('g')
        .attr('transform', `translate(${util.toFixed(x + cx)}, ${util.toFixed(y + cy)})`);
    for (let j = 0; j < levels; j++) {
        group
            .selectAll(null)
            .data(data)
            .enter()
            .append('line')
            .attr('x1', (d, i) => posX(j + 1, i))
            .attr('y1', (d, i) => posY(j + 1, i))
            .attr('x2', (d, i) => posX(j + 1, i + 1))
            .attr('y2', (d, i) => posY(j + 1, i + 1))
            .style('stroke', settings.weakColor)
            .style('stroke-dasharray', '4 4')
            .style('stroke-width', '1px');
    }
    group
        .selectAll(null)
        .data(rangeLabels)
        .enter()
        .append('text')
        .text((d) => d)
        .style('font-size', `${util.toFixed(radius / 12)}px`)
        .attr('text-anchor', 'start')
        .attr('dominant-baseline', 'auto')
        .attr('x', util.toFixed(radius / 50))
        .attr('y', (d, i) => util.toFixed(-radius * ((i + 1) / levels)))
        .attr('fill', settings.weakColor);
    const axis = group
        .selectAll(null)
        .data(data)
        .enter()
        .append('g')
        .attr('class', 'axis');
    axis.append('line')
        .attr('x1', (d, i) => posX(1, i))
        .attr('y1', (d, i) => posY(1, i))
        .attr('x2', (d, i) => posX(levels, i))
        .attr('y2', (d, i) => posY(levels, i))
        .style('stroke', settings.weakColor)
        .style('stroke-dasharray', '4 4')
        .style('stroke-width', '1px');
    axis.append('text')
        .text((d) => d.name)
        .style('font-size', `${util.toFixed(radius / 7.5)}px`)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('x', (d, i) => posX(1.25 * levels, i))
        .attr('y', (d, i) => posY(1.17 * levels, i))
        .attr('fill', settings.foregroundColor)
        .append('title')
        .text((d) => d.value);
    const points = data
        .map((d) => toLevel(d.value))
        .map((level, i) => `${posX(level, i)},${posY(level, i)}`)
        .join(' ');
    const radar = group
        .append('polygon')
        .style('stroke-width', '4px')
        .style('stroke', settings.radarColor)
        .attr('points', points)
        .style('fill', settings.radarColor)
        .style('fill-opacity', 0.5);
    if (isAnimate) {
        const level0 = toLevel(0);
        const points0 = data
            .map((d, i) => `${posX(level0, i)},${posY(level0, i)}`)
            .join(' ');
        radar
            .append('animate')
            .attr('attributeName', 'points')
            .attr('values', `${points0};${points}`)
            .attr('dur', '3s')
            .attr('repeatCount', '1');
    }
};
exports.createRadarContrib = createRadarContrib;
