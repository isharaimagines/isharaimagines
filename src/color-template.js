// export const NormalSettings: type.NormalColorSettings = {
//   type: "normal",
//   backgroundColor: "#ffffff",
//   foregroundColor: "#00000f",
//   strongColor: "#111133",
//   weakColor: "gray",
//   radarColor: "#47a042",
//   contribColors: ["#efefef", "#d8e887", "#8cc569", "#47a042", "#1d6a23"],
// };
// export const HalloweenSettings: type.NormalColorSettings = {
//   type: "normal",
//   backgroundColor: "#ffffff",
//   foregroundColor: "#00000f",
//   strongColor: "#111133",
//   weakColor: "gray",
//   radarColor: "#47a042",
//   contribColors: ["#efefef", "#ffed4a", "#ffc402", "#fe9400", "#fa6100"],
// };
// Northern hemisphere
export const NorthSeasonSettings = {
  type: "season",
  backgroundColor: "transparent",
  foregroundColor: "#00000f",
  strongColor: "#111133",
  weakColor: "gray",
  radarColor: "#47a042",
  textColors: "#EB5A3C",
  contribColors1: ["#efefef", "#ffe7ff", "#edaeda", "#e492ca", "#ba7aad"], // spring
  contribColors2: ["#efefef", "#d8e887", "#8cc569", "#47a042", "#1d6a23"], // summer
  contribColors3: ["#efefef", "#ffed4a", "#ffc402", "#fe9400", "#fa6100"], // autumn
  contribColors4: ["#efefef", "#999999", "#cccccc", "#dddddd", "#eeeeee"], // winter
};
export const NightViewSettings = {
  type: "normal",
  backgroundColor: "#00000f",
  foregroundColor: "#eeeeff",
  strongColor: "rgb(255,200,55)",
  weakColor: "#aaaaaa",
  radarColor: "rgb(255,200,55)",
  textColors: "#0D92F4",
  contribColors: [
    "rgb(25,60,130)",
    "rgb(25,90,210)",
    "rgb(25,120,220)",
    "rgb(25,150,230)",
    "rgb(25,165,240)",
  ],
};
export const NightGreenSettings = {
  type: "normal",
  backgroundColor: "#00000f",
  foregroundColor: "#eeeeff",
  strongColor: "rgb(255,200,55)",
  weakColor: "#aaaaaa",
  radarColor: "#47a042",
  textColors: "#16C47F",
  contribColors: ["#444444", "#1B7D28", "#24A736", "#2DD143", "#57DA69"],
};
export const GitBlockSettings = {
  type: "bitmap",
  backgroundColor: "transparent",
  foregroundColor: "#00000f",
  strongColor: "#111133",
  weakColor: "gray",
  radarColor: "#47a042",
  textColors: "#E82561",
  contribPatterns: [
    {
      top: {
        backgroundColor: "#f8f8f8",
        foregroundColor: "#aaaaaa",
        width: 32,
        bitmap: [
          0x0000_0000, 0x0000_0000, 0x01c0_01c0, 0x0630_0630, 0x0a08_0a08,
          0x1208_1208, 0x1104_1104, 0x1184_1184, 0x12c4_12c4, 0x0d78_0d78,
          0x0aa8_0aa8, 0x0750_0750, 0x01e0_01e0, 0x0000_0000, 0x0000_0000,
          0x0000_0000,
        ],
      },
      left: {
        width: 32,
        bitmap: [
          0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000,
          0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000,
          0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000,
          0xaaaa_aaaa,
        ],
      },
      right: {
        width: 32,
        bitmap: [
          0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000,
          0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000,
          0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000,
          0xaaaa_aaaa,
        ],
      },
    },
    {
      top: {
        backgroundColor: "hsl(125, 52%, 50%)",
        foregroundColor: "hsl(125, 52%, 10%)",
        width: 32,
        bitmap: [
          0x0000_0000, 0x0000_0000, 0x01c0_01c0, 0x0630_0630, 0x0a08_0a08,
          0x1208_1208, 0x1104_1104, 0x1184_1184, 0x12c4_12c4, 0x0d78_0d78,
          0x0aa8_0aa8, 0x0750_0750, 0x01e0_01e0, 0x0000_0000, 0x0000_0000,
          0x0000_0000,
        ],
      },
      left: {
        width: 32,
        bitmap: [
          0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000,
          0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000,
          0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000,
          0xaaaa_aaaa,
        ],
      },
      right: {
        width: 32,
        bitmap: [
          0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000,
          0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000,
          0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000,
          0xaaaa_aaaa,
        ],
      },
    },
    {
      top: {
        backgroundColor: "hsl(242, 100%, 65%)",
        foregroundColor: "hsl(242, 100%, 16%)",
        width: 32,
        bitmap: [
          0x0000_0000, 0x0000_0000, 0x01c0_01c0, 0x0630_0630, 0x0a08_0a08,
          0x1208_1208, 0x1104_1104, 0x1184_1184, 0x12c4_12c4, 0x0d78_0d78,
          0x0aa8_0aa8, 0x0750_0750, 0x01e0_01e0, 0x0000_0000, 0x0000_0000,
          0x0000_0000,
        ],
      },
      left: {
        width: 32,
        bitmap: [
          0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000,
          0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000,
          0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000,
          0xaaaa_aaaa,
        ],
      },
      right: {
        width: 32,
        bitmap: [
          0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000,
          0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000,
          0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000,
          0xaaaa_aaaa,
        ],
      },
    },
    {
      top: {
        backgroundColor: "hsl(48, 100%, 50%)",
        foregroundColor: "hsl(48, 100%, 15%)",
        width: 32,
        bitmap: [
          0x0000_0000, 0x0000_0000, 0x01c0_01c0, 0x0630_0630, 0x0a08_0a08,
          0x1208_1208, 0x1104_1104, 0x1184_1184, 0x12c4_12c4, 0x0d78_0d78,
          0x0aa8_0aa8, 0x0750_0750, 0x01e0_01e0, 0x0000_0000, 0x0000_0000,
          0x0000_0000,
        ],
      },
      left: {
        width: 32,
        bitmap: [
          0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000,
          0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000,
          0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000,
          0xaaaa_aaaa,
        ],
      },
      right: {
        width: 32,
        bitmap: [
          0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000,
          0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000,
          0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000,
          0xaaaa_aaaa,
        ],
      },
    },
    {
      top: {
        backgroundColor: "hsl(350, 100%, 50%)",
        foregroundColor: "hsl(350, 100%, 15%)",
        width: 32,
        bitmap: [
          0x0000_0000, 0x0000_0000, 0x01c0_01c0, 0x0630_0630, 0x0a08_0a08,
          0x1208_1208, 0x1104_1104, 0x1184_1184, 0x12c4_12c4, 0x0d78_0d78,
          0x0aa8_0aa8, 0x0750_0750, 0x01e0_01e0, 0x0000_0000, 0x0000_0000,
          0x0000_0000,
        ],
      },
      left: {
        width: 32,
        bitmap: [
          0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000,
          0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000,
          0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000,
          0xaaaa_aaaa,
        ],
      },
      right: {
        width: 32,
        bitmap: [
          0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000,
          0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000,
          0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000, 0x0000_0000,
          0xaaaa_aaaa,
        ],
      },
    },
  ],
};
