const palette = {
  grey: {
    25: "#fafafa",
    50: "#f5f5f5",
    100: "#f0f0f0",
    150: "#ebebeb",
    200: "#e0e0e0",
    250: "#c7c7c7",
    300: "#b3b3b3",
    350: "#949494",
    400: "#8a8a8a",
    450: "#616161",
    500: "#424242",
    550: "#3d3d3d",
    600: "#333333",
    700: "#292929",
    800: "#1f1f1f",
    900: "#0f0f0f",
  },
  neutral: {
    white: "#ffffff",
    black: "#000000",
  },
  blue: {
    lighter: "#f9fcff",
    light: "#e0f9ff",
    medium: "#00bce4",
    dark: "#0095cd",
    darker: "#003749",
  },
  green: {
    lighter: "#f7ffe6",
    light: "#cfffa3",
    medium: "#83dd3f",
    dark: "#4fa400",
    darker: "#235300",
  },
  red: {
    lighter: "#ffedea",
    light: "#ffb3ab",
    dark: "#e42b30",
    medium: "#e42b30",
    darker: "#93000e",
  },
  orange: {
    lighter: "#ffede0",
    light: "#ffb77a",
    dark: "#ed8b18",
    medium: "#ed8b18",
    darker: "#914c00",
  },
  vividMalachite: {
    lighter: "#edfff2",
    light: "#edfff2",
    dark: "#00a800",
    medium: "#00c700",
    darker: "#006e00",
  },
};

const mixins = {
  toolbar: {
    minHeight: "68px",
  },
  suggestionBanner: {
    minHeight: "68px",
  },
  bottomNavigation: {
    height: "56px",
  },
  sidebar: {
    maxWidth: "212px",
  },
};

module.exports = {
  palette: {
    common: {
      blue: palette.blue,
      green: palette.green,
      red: palette.red,
      orange: palette.orange,
      vividMalachite: palette.vividMalachite,
      grey: palette.grey,
      neutral: palette.neutral,
    },
    primary: {
      main: palette.blue.dark,
    },
    secondary: { main: palette.green.dark },
    error: { main: palette.red.medium },
    warning: { main: palette.orange.dark, contrastText: palette.neutral.white },
    success: {
      main: palette.vividMalachite.dark,
    },
    info: { main: palette.grey[400] },
    text: {
      primary: palette.grey[900],
      secondary: palette.grey[400],
      accent: palette.blue.dark,
      contrast: palette.neutral.white,
    },
    divider: palette.grey[200],
    tonalOffset: 0.12,
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  shadows: {
    0: "none",
    1: "0px 1px 4px rgba(0, 0, 0, 0.16)",
    2: "0px 1px 4px rgba(0, 0, 0, 0.16)",
    3: "0px 2px 12px rgba(0, 0, 0, 0.08)",
    4: "0px 2px 12px rgba(0, 0, 0, 0.2)",
  },
  shape: {
    borderRadius: "8px",
    borderRadiusSmall: "4px",
    borderRadiusBig: "12px",
  },
  mixins: {
    ...mixins,
    header: {
      minHeight: mixins.toolbar.minHeight,
    },
  },
  typography: {
    fontFamily: "ProximaNova",
    fontSize: 14,
    h1: { fontWeight: 400, fontSize: "96px", lineHeight: "96px" },
    h2: { fontWeight: 400, fontSize: "60px", lineHeight: "60px" },
    h3: { fontWeight: 400, fontSize: "48px", lineHeight: "48px" },
    h4: { fontWeight: 700, fontSize: "34px", lineHeight: "34px" },
    h5: { fontWeight: 400, fontSize: "24px", lineHeight: "32px" },
    h6: { fontWeight: 500, fontSize: "20px", lineHeight: "28px" },
    subtitle1: {
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "-0.03em",
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "-0.02em",
    },
    body1: {
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "20px",
      letterSpacing: "-0.02em",
    },
    body2: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "20px",
    },
    button: { fontWeight: 600, fontSize: "16px", lineHeight: "22px" },
    caption: { fontWeight: 500, fontSize: "12px", lineHeight: "16px" },
    overline: { fontWeight: 400, fontSize: "12px", lineHeight: "16px" },
  },
};
