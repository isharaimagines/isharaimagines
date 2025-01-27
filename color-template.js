"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitBlockSettings = exports.NightRainbowSettings = exports.NightGreenSettings = exports.NightViewSettings = exports.SouthSeasonSettings = exports.NorthSeasonSettings = exports.HalloweenSettings = exports.NormalSettings = void 0;
exports.NormalSettings = {
    type: "normal",
    backgroundColor: "#ffffff",
    foregroundColor: "#00000f",
    strongColor: "#111133",
    weakColor: "gray",
    radarColor: "#47a042",
    contribColors: ["#efefef", "#d8e887", "#8cc569", "#47a042", "#1d6a23"],
};
exports.HalloweenSettings = {
    type: "normal",
    backgroundColor: "#ffffff",
    foregroundColor: "#00000f",
    strongColor: "#111133",
    weakColor: "gray",
    radarColor: "#47a042",
    contribColors: ["#efefef", "#ffed4a", "#ffc402", "#fe9400", "#fa6100"],
};
// Northern hemisphere
exports.NorthSeasonSettings = {
    type: "season",
    backgroundColor: "#ffffff",
    foregroundColor: "#00000f",
    strongColor: "#111133",
    weakColor: "gray",
    radarColor: "#47a042",
    contribColors1: ["#efefef", "#ffe7ff", "#edaeda", "#e492ca", "#ba7aad"], // spring
    contribColors2: ["#efefef", "#d8e887", "#8cc569", "#47a042", "#1d6a23"], // summer
    contribColors3: ["#efefef", "#ffed4a", "#ffc402", "#fe9400", "#fa6100"], // autumn
    contribColors4: ["#efefef", "#999999", "#cccccc", "#dddddd", "#eeeeee"], // winter
};
// Southern hemisphere
exports.SouthSeasonSettings = {
    type: "season",
    backgroundColor: "#ffffff",
    foregroundColor: "#00000f",
    strongColor: "#111133",
    weakColor: "gray",
    radarColor: "#47a042",
    contribColors1: ["#efefef", "#ffed4a", "#ffc402", "#fe9400", "#fa6100"], // autumn
    contribColors2: ["#efefef", "#999999", "#cccccc", "#dddddd", "#eeeeee"], // winter
    contribColors3: ["#efefef", "#ffe7ff", "#edaeda", "#e492ca", "#ba7aad"], // spring
    contribColors4: ["#efefef", "#d8e887", "#8cc569", "#47a042", "#1d6a23"], // summer
};
exports.NightViewSettings = {
    type: "normal",
    backgroundColor: "#00000f",
    foregroundColor: "#eeeeff",
    strongColor: "rgb(255,200,55)",
    weakColor: "#aaaaaa",
    radarColor: "rgb(255,200,55)",
    contribColors: [
        "rgb(25,60,130)",
        "rgb(25,90,210)",
        "rgb(25,120,220)",
        "rgb(25,150,230)",
        "rgb(25,165,240)",
    ],
};
exports.NightGreenSettings = {
    type: "normal",
    backgroundColor: "#00000f",
    foregroundColor: "#eeeeff",
    strongColor: "rgb(255,200,55)",
    weakColor: "#aaaaaa",
    radarColor: "#47a042",
    contribColors: ["#444444", "#1B7D28", "#24A736", "#2DD143", "#57DA69"],
};
exports.NightRainbowSettings = {
    type: "rainbow",
    backgroundColor: "#00000f",
    foregroundColor: "#eeeeff",
    strongColor: "rgb(255,200,55)",
    weakColor: "#aaaaaa",
    radarColor: "rgb(255,200,55)",
    saturation: "50%",
    contribLightness: ["20%", "30%", "35%", "40%", "50%"],
    duration: "10s",
    hueRatio: -7,
};
exports.GitBlockSettings = {
    type: "bitmap",
    backgroundColor: "#ffffff",
    foregroundColor: "#00000f",
    strongColor: "#111133",
    weakColor: "gray",
    radarColor: "#47a042",
    contribPatterns: [
        {
            top: {
                backgroundColor: "#f8f8f8",
                foregroundColor: "#aaaaaa",
                width: 32,
                bitmap: [
                    0, 0, 29360576, 103810608, 168299016,
                    302518792, 285479172, 293867908, 314839748, 225971576,
                    178784936, 122685264, 31457760, 0, 0,
                    0,
                ],
            },
            left: {
                width: 32,
                bitmap: [
                    0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0,
                    2863311530,
                ],
            },
            right: {
                width: 32,
                bitmap: [
                    0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0,
                    2863311530,
                ],
            },
        },
        {
            top: {
                backgroundColor: "hsl(125, 52%, 50%)",
                foregroundColor: "hsl(125, 52%, 10%)",
                width: 32,
                bitmap: [
                    0, 0, 29360576, 103810608, 168299016,
                    302518792, 285479172, 293867908, 314839748, 225971576,
                    178784936, 122685264, 31457760, 0, 0,
                    0,
                ],
            },
            left: {
                width: 32,
                bitmap: [
                    0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0,
                    2863311530,
                ],
            },
            right: {
                width: 32,
                bitmap: [
                    0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0,
                    2863311530,
                ],
            },
        },
        {
            top: {
                backgroundColor: "hsl(242, 100%, 65%)",
                foregroundColor: "hsl(242, 100%, 16%)",
                width: 32,
                bitmap: [
                    0, 0, 29360576, 103810608, 168299016,
                    302518792, 285479172, 293867908, 314839748, 225971576,
                    178784936, 122685264, 31457760, 0, 0,
                    0,
                ],
            },
            left: {
                width: 32,
                bitmap: [
                    0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0,
                    2863311530,
                ],
            },
            right: {
                width: 32,
                bitmap: [
                    0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0,
                    2863311530,
                ],
            },
        },
        {
            top: {
                backgroundColor: "hsl(48, 100%, 50%)",
                foregroundColor: "hsl(48, 100%, 15%)",
                width: 32,
                bitmap: [
                    0, 0, 29360576, 103810608, 168299016,
                    302518792, 285479172, 293867908, 314839748, 225971576,
                    178784936, 122685264, 31457760, 0, 0,
                    0,
                ],
            },
            left: {
                width: 32,
                bitmap: [
                    0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0,
                    2863311530,
                ],
            },
            right: {
                width: 32,
                bitmap: [
                    0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0,
                    2863311530,
                ],
            },
        },
        {
            top: {
                backgroundColor: "hsl(350, 100%, 50%)",
                foregroundColor: "hsl(350, 100%, 15%)",
                width: 32,
                bitmap: [
                    0, 0, 29360576, 103810608, 168299016,
                    302518792, 285479172, 293867908, 314839748, 225971576,
                    178784936, 122685264, 31457760, 0, 0,
                    0,
                ],
            },
            left: {
                width: 32,
                bitmap: [
                    0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0,
                    2863311530,
                ],
            },
            right: {
                width: 32,
                bitmap: [
                    0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0,
                    2863311530,
                ],
            },
        },
    ],
};
