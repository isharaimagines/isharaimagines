export interface CalendarInfo {
  /* ... */
}
export interface LangInfo {
  /* ... */
}
export interface UserInfo {
  /* ... */
}

export interface PanelPattern {
  /* ... */
}
export interface TopPanelPattern extends PanelPattern {
  /* ... */
}
export interface SidePanelPattern extends PanelPattern {
  /* ... */
}
export interface ContribPattern {
  /* ... */
}

export interface LangInfo {
  language: string;
  color: string;
  contributions: number;
}

export interface ContribPattern {
  top: TopPanelPattern;
  left: SidePanelPattern;
  right: SidePanelPattern;
}

export interface TopPanelPattern extends PanelPattern {
  backgroundColor: string;
  foregroundColor: string;
}

export interface SidePanelPattern extends PanelPattern {
  /** If omitted, calculate from the topPanel backgroundColor */
  backgroundColor?: string;
  /** If omitted, calculate from the topPanel foregroundColor */
  foregroundColor?: string;
}

// Common settings shared by all types
export interface CommonSettings {
  backgroundColor: string;
  foregroundColor: string;
  strongColor: string;
  weakColor: string;
  radarColor: string;

  growingAnimation?: boolean;

  fileName?: string;

  l10n?: {
    commit: string;
    repo: string;
    review: string;
    pullreq: string;
    issue: string;
    contrib: string;
  };
}
export interface UserInfo {
  isHalloween: boolean;
  contributionCalendar: Array<CalendarInfo>;
  contributesLanguage: Array<LangInfo>;
  totalContributions: number;
  totalCommitContributions: number;
  totalIssueContributions: number;
  totalPullRequestContributions: number;
  totalPullRequestReviewContributions: number;
  totalRepositoryContributions: number;
  totalForkCount: number;
  totalStargazerCount: number;
}

export interface CalendarInfo {
  contributionCount: number;
  contributionLevel: number;
  date: Date;
}

export interface PanelPattern {
  width: number;
  /** array of (number or hex-string) */
  bitmap: (number | string)[];
}

export type ContributionLevel =
  | "NONE"
  | "FIRST_QUARTILE"
  | "SECOND_QUARTILE"
  | "THIRD_QUARTILE"
  | "FOURTH_QUARTILE";
// Settings specifically for Radar contributions
// export interface RadarContribSettings extends CommonSettings {
//   weakColor: string;
//   radarColor: string;
// }

// // Settings specifically for Pie language charts
// export interface PieLangSettings extends CommonSettings {}

// Settings specific to bitmap patterns
export interface BitmapPatternSettings {
  contribPatterns: ContribPattern[];
}

// Settings for colored contributions (Normal, Season, Rainbow)
export interface ColorSettings {
  strongColor: string;
}

export interface NormalColorSettings extends CommonSettings {
  type: "normal";
  contribColors: [string, string, string, string, string];
}

export interface SeasonColorSettings extends CommonSettings {
  type: "season";
  contribColors1: [string, string, string, string, string];
  contribColors2: [string, string, string, string, string];
  contribColors3: [string, string, string, string, string];
  contribColors4: [string, string, string, string, string];
}

export interface RainbowColorSettings extends CommonSettings {
  type: "rainbow";
  saturation: string;
  contribLightness: [string, string, string, string, string];
  duration: string;
  hueRatio: number;
}

export interface BitmapPatternSettings extends CommonSettings {
  type: "bitmap";
  contribPatterns: ContribPattern[];
}

export type FullSettings =
  | NormalColorSettings
  | SeasonColorSettings
  | RainbowColorSettings
  | BitmapPatternSettings;

export type Settings = FullSettings; // Settings is now ONLY FullSettings

export type SettingFile = Settings | Settings[];
