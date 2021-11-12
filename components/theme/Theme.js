import { createTheme } from "@mui/material";

const mindPurpDark = "#6600ff";
const mindPurpMain = "#7926ff";
const mindPurpLight = "#a770ff";
const secondary = "#fff";
const secondaryDark = "#F8F9FB";
const secondaryDarker = "#E0E1E4";
const tertiary = "#0e0a11";
const tertiayLight = "#2b2b2b";
const tertiaryLight2 = "#202020";

export default createTheme({
  palette: {
    common: {
      mindPurpDark: mindPurpDark,
      mindPurpLight: mindPurpLight,
      secondary: secondary,
      secondaryDark: secondaryDark,
      secondaryDarker: secondaryDarker,
      tertiary: tertiary,
      tertiaryLight: tertiayLight,
      tertiaryLight2: tertiaryLight2,
    },
    primary: {
      // dark: mindPurpDark,
      main: mindPurpMain
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
    h1: {
      // fontFamily: "Raleway",
      // fontWeight: 700,
      // fontSize: "2.5rem",
      color: tertiary,
      lineHeight: 1.5,
    },
    h2: {
      fontFamily: 'Raleway',
      color: tertiary,
      fontWeight: 700
    },
    h3: {
      fontFamily: 'Raleway',
      color: secondary
    },
    h4: {
      fontFamily: 'Raleway',
      color: secondary
    },
    h5: {
      fontFamily: 'Raleway',
      color: secondary
    }
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: secondaryDarker,
          fontSize: "0.875rem",
          fontWeight: 300,
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&&:before": {
            borderBottom: `2px solid ${mindPurpMain}`,
          },
          "&&:hover:not(.Mui-disabled):not(.Mui-error):before": {
            borderBottom: `2px solid ${mindPurpMain}`,
          },
        },
        input: {
          color: '#fff',
          fontWeight: 300,
        },
      },
    },
  },
});
