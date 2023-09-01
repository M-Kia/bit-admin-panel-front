import { createTheme, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    xl: false;
  }

  interface PaletteColor {
    lighter: string;
    lighterAlt: string;
    tertiary: string;
    dark: string;
    darker: string;
    darkerAlt: string;
  }

  interface SimplePaletteColorOptions {
    lighter: string;
    lighterAlt: string;
    tertiary: string;
    darker: string;
    darkerAlt: string;
  }

  interface Palette {
    custom: {
      blue: { 1: string; 2: string };
      grey: {
        10: string;
        20: string;
        30: string;
        40: string;
        50: string;
        60: string;
        90: string;
        110: string;
        130: string;
        150: string;
        160: string;
        190: string;
      };
    };
    status: {
      error: string;
      success: string;
      severeWarning: string;
      warning: string;
      errorBg: string;
      successBg: string;
      severeWarningBg: string;
      warningBg: string;
    };
    overlay: {
      light: string;
      dark: string;
    };
    input: {
      border: string;
      borderHover: string;
    };
  }

  interface PaletteOptions {
    custom: {
      blue: { 1: string; 2: string };
      grey: {
        10: string;
        20: string;
        30: string;
        40: string;
        50: string;
        60: string;
        90: string;
        110: string;
        130: string;
        150: string;
        160: string;
        190: string;
      };
    };
    status: {
      error: string;
      success: string;
      severeWarning: string;
      warning: string;
      errorBg: string;
      successBg: string;
      severeWarningBg: string;
      warningBg: string;
    };
    overlay: {
      light: string;
      dark: string;
    };
    input: {
      border: string;
      borderHover: string;
    };
  }
}

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#0078d4",
      light: "#c7e0f4",
      lighter: "#deecf9",
      lighterAlt: "#eff6fc",
      tertiary: "#2b88d8",
      dark: "#005a9e",
      darker: "#005a9e",
      darkerAlt: "#106ebe",
    },
    text: {
      primary: "#323130",
      secondary: "#605e5c",
      disabled: "#a19f9d",
    },
    background: {
      default: "#fbfcff",
    },
    divider: "#edebe9",
    custom: {
      blue: { 1: "#002a66", 2: "#003681" },
      grey: {
        10: "#faf9f8",
        20: "#f3f2f1",
        30: "#edebe9",
        40: "#e1dfdd",
        50: "#d2d0ce",
        60: "#c8c6c4",
        90: "#a19f9d",
        110: "#8A8886",
        130: "#605e5c",
        150: "#3b3a39",
        160: "#323130",
        190: "#201f1e",
      },
    },
    input: {
      border: "#8a8886",
      borderHover: "#323130",
    },
    overlay: {
      light: "#a80000",
      dark: "#107c10",
    },
    status: {
      error: "#d83b01",
      success: "#797775",
      severeWarning: "#ffffff66",
      warning: "#00000066",
      errorBg: "#f0dadc",
      successBg: "#d2e9d0",
      severeWarningBg: "#f1ccbf",
      warningBg: "#f2e7c1",
    },
  },
  breakpoints: {
    keys: ["sm", "md", "lg"],
    values: {
      sm: 0,
      md: 700,
      lg: 1400,
    },
  },
  spacing: 1,
  typography: {
    fontFamily: "Segoe UI",
    fontWeightBold: 600,
  },
  shape: {
    borderRadius: 1,
  },
};

const theme = createTheme(themeOptions);

export default theme;
