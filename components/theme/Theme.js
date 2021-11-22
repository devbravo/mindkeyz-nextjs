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
      fontFamily: 'sans-serif' ,
      fontWeight: 900,
      fontSize: "0.75rem",
      letterSpacing: "1px",
    },
    h1: {
      fontFamily: 'sans-serif',
      color: secondary,
      lineHeight: 1.5,
      letterSpacing: 1.3,
      // fontSize: '6rem'
    },
    h2: {
      fontFamily: 'sans-serif',
      color: secondary,
      fontWeight: 700,
      letterSpacing: 1.3,
      // fontSize: '3.75rem'
    },
    h3: {
      fontFamily: 'sans-serif',
      color: secondary,
      fontWeight: 600,
      letterSpacing: 1.3,
      // fontSize: '3rem'
    },
    h4: {
      fontFamily: 'sans-serif',
      color: secondary,
      fontWeight: 600,
      letterSpacing: 1.3,
      fontSize: '2.50rem'
    },
    h5: {
      fontFamily: 'sans-serif',
      color: secondary,
      fontWeight: 600,
      letterSpacing: 1.3,
      // fontSize: '1.5rem'
    },
    h6: {
      fontFamily: 'sans-serif',
      color: secondary,
      fontWeight: 700,
      letterSpacing: 1.3,
      fontSize: '1.25rem'
    },
    body1: {
      fontFamily: 'sans-serif',
      // fontWeight: 600,
      letterSpacing: 1.3
      // fontSize: '1rem'
     },
     body2: {
       fontFamily: 'sans-serif',
       letterSpacing: 1.3,
       fontWeight: 400
       // fontSize: '0.875rem'
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
