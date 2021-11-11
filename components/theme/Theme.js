import { createTheme } from "@mui/material";

const mindPurpDark = "#6600ff";
const mindPurpMain = "#7926ff";
const mindPurpLight = "#a770ff";
const secondary = "#fff";
const secondaryDark = "F8F9FB";
const secondaryDarker = "E0E1E4";
const tertiary = "#0e0a11";
const tertiayLight = "#2b2b2b";
const tertiaryLight2 = "#202020";

export default createTheme({
  palette: {
    common: {
      mindPurpLight: mindPurpLight,
      secondary: secondary,
      secondaryDark: secondaryDark,
      secondaryDarker: secondaryDarker,
      tertiary: tertiary,
      tertiayLight: tertiayLight,
      tertiaryLight2: tertiaryLight2,
    },
    primary: {
      // dark: mindPurpDark,
      main: mindPurpMain,
    },

    secondary: {
      main: secondary,
    },
    tertiary: {
      main: tertiary,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      //textTransform: "none",
      fontWeight: 900,
      fontSize: "0.75rem",
      letterSpacing: "1px",
    },
  },
});
