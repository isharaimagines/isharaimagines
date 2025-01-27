"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = exports.fetchNext = exports.fetchFirst = exports.URL = void 0;
const axios_1 = __importDefault(require("axios"));
exports.URL = 'https://api.github.com/graphql';
const maxReposOneQuery = 100;
const fetchFirst = (token, userName) => __awaiter(void 0, void 0, void 0, function* () {
    const headers = {
        Authorization: `bearer ${token}`,
    };
    const request = {
        query: `
            query($login: String!) {
                user(login: $login) {
                    contributionsCollection {
                        contributionCalendar {
                            isHalloween
                            totalContributions
                            weeks {
                                contributionDays {
                                    contributionCount
                                    contributionLevel
                                    date
                                }
                            }
                        }
                        commitContributionsByRepository(maxRepositories: ${maxReposOneQuery}) {
                            repository {
                                primaryLanguage {
                                    name
                                    color
                                }
                            }
                            contributions {
                                totalCount
                            }
                        }
                        totalCommitContributions
                        totalIssueContributions
                        totalPullRequestContributions
                        totalPullRequestReviewContributions
                        totalRepositoryContributions
                    }
                    repositories(first: ${maxReposOneQuery}, ownerAffiliations: OWNER) {
                        edges {
                            cursor
                        }
                        nodes {
                            forkCount
                            stargazerCount
                        }
                    }
                }
            }
        `.replace(/\s+/g, ' '),
        variables: { login: userName },
    };
    const response = yield axios_1.default.post(exports.URL, request, {
        headers: headers,
    });
    return response.data;
});
exports.fetchFirst = fetchFirst;
const fetchNext = (token, userName, cursor) => __awaiter(void 0, void 0, void 0, function* () {
    const headers = {
        Authorization: `bearer ${token}`,
    };
    const request = {
        query: `
            query($login: String!, $cursor: String!) {
                user(login: $login) {
                    repositories(after: $cursor, first: ${maxReposOneQuery}, ownerAffiliations: OWNER) {
                        edges {
                            cursor
                        }
                        nodes {
                            forkCount
                            stargazerCount
                        }
                    }
                }
            }
        `.replace(/\s+/g, ' '),
        variables: {
            login: userName,
            cursor: cursor,
        },
    };
    const response = yield axios_1.default.post(exports.URL, request, {
        headers: headers,
    });
    return response.data;
});
exports.fetchNext = fetchNext;
/** Fetch data from GitHub GraphQL */
const fetchData = (token, userName, maxRepos) => __awaiter(void 0, void 0, void 0, function* () {
    const res1 = yield (0, exports.fetchFirst)(token, userName);
    const result = res1.data;
    if (result && result.user.repositories.nodes.length === maxReposOneQuery) {
        const repos1 = result.user.repositories;
        let cursor = repos1.edges[repos1.edges.length - 1].cursor;
        while (repos1.nodes.length < maxRepos) {
            const res2 = yield (0, exports.fetchNext)(token, userName, cursor);
            if (res2.data) {
                const repos2 = res2.data.user.repositories;
                repos1.nodes.push(...repos2.nodes);
                if (repos2.nodes.length !== maxReposOneQuery) {
                    break;
                }
                cursor = repos2.edges[repos2.edges.length - 1].cursor;
            }
            else {
                break;
            }
        }
    }
    return res1;
});
exports.fetchData = fetchData;
