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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const core = __importStar(require("@actions/core"));
const aggregate = __importStar(require("./aggregate-user-info"));
const template = __importStar(require("./color-template"));
const create = __importStar(require("./create-svg"));
const f = __importStar(require("./file-writer"));
const r = __importStar(require("./settings-reader"));
const client = __importStar(require("./github-graphql"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = process.env.GITHUB_TOKEN;
        if (!token) {
            core.setFailed("GITHUB_TOKEN is empty");
            return;
        }
        const userName = 3 <= process.argv.length ? process.argv[2] : process.env.USERNAME;
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
        const response = yield client.fetchData(token, userName, maxRepos);
        const userInfo = aggregate.aggregateUserInfo(response);
        if (process.env.SETTING_JSON) {
            const settingFile = r.readSettingJson(process.env.SETTING_JSON);
            const settingInfos = "length" in settingFile ? settingFile : [settingFile];
            for (const settingInfo of settingInfos) {
                const fileName = settingInfo.fileName || "profile-customize.svg";
                f.writeFile(fileName, create.createSvg(userInfo, settingInfo, false));
            }
        }
        else {
            const settings = userInfo.isHalloween
                ? template.HalloweenSettings
                : template.NormalSettings;
            f.writeFile("profile-green-animate.svg", create.createSvg(userInfo, settings, true));
            f.writeFile("profile-green.svg", create.createSvg(userInfo, settings, false));
            // Northern hemisphere
            f.writeFile("profile-season-animate.svg", create.createSvg(userInfo, template.NorthSeasonSettings, true));
            f.writeFile("profile-season.svg", create.createSvg(userInfo, template.NorthSeasonSettings, false));
            // Southern hemisphere
            f.writeFile("profile-south-season-animate.svg", create.createSvg(userInfo, template.SouthSeasonSettings, true));
            f.writeFile("profile-south-season.svg", create.createSvg(userInfo, template.SouthSeasonSettings, false));
            f.writeFile("profile-night-view.svg", create.createSvg(userInfo, template.NightViewSettings, true));
            f.writeFile("profile-night-green.svg", create.createSvg(userInfo, template.NightGreenSettings, true));
            f.writeFile("profile-night-rainbow.svg", create.createSvg(userInfo, template.NightRainbowSettings, true));
            f.writeFile("profile-gitblock.svg", create.createSvg(userInfo, template.GitBlockSettings, true));
        }
    }
    catch (error) {
        console.error(error);
        core.setFailed("error");
    }
});
exports.main = main;
void (0, exports.main)();
