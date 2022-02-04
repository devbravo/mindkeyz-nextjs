import { createTheme } from "@mui/material";

const mindPurpDark = "#6600ff";
const mindPurpMain = "#7926ff";
const mindPurpLight = "#a770ff";
const secondary = "#fff";
const secondaryDark = "#F8F9FB";
const secondaryDarker = "#E0E1E4";
// const tertiary = "#0e0a11";
const tertiary = "#000";
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
      fontFamily: 'Lato',
      fontWeight: 900,
      fontSize: "0.75rem",
      letterSpacing: "1px",
    },
    h1: {
      fontFamily: 'Lato',
      color: secondary,
      lineHeight: 1.5,
      letterSpacing: 1.3,
      // fontSize: '6rem'
    },
    h2: {
      fontFamily: 'Lato',
      color: secondary,
      fontWeight: 700,
      letterSpacing: 1.3,
      // fontSize: '3.75rem'
    },
    h3: {
      fontFamily: 'Lato',
      color: secondary,
      fontWeight: 600,
      letterSpacing: 1.3,
      // fontSize: '3rem'
    },
    h4: {
      fontFamily: 'Lato',
      color: secondary,
      fontWeight: 600,
      letterSpacing: 1.3,
      fontSize: '2.50rem'
    },
    h5: {
      fontFamily: 'Lato',
      color: secondary,
      fontWeight: 600,
      letterSpacing: 1.3,
      // fontSize: '1.5rem'
    },
    h6: {
      fontFamily: 'Lato',
      color: secondary,
      fontWeight: 700,
      letterSpacing: 1.3,
      fontSize: '1.25rem'
    },
    body1: {
      fontFamily: 'Lato',
      // fontWeight: 600,
      letterSpacing: 1.3
      // fontSize: '1rem'
     },
     body2: {
       fontFamily: 'Lato',
       letterSpacing: 1.3,
       fontWeight: 400
       // fontSize: '0.875rem'
     },
     paragraph1: {
      //  fontFamily: 'Raleway',
       fontWeight: 400,
       fontSize: '1.25rem',
       letterSpacing: 1.3,
       lineHeight: 1.6
     },
     paragraph2: {
      //  fontFamily: 'Raleway',
       fontWeight: 500,
       fontSize: '0.875rem',
       letterSpacing: 1.3,
       lineHeight: 1.5
     },
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
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&&:before': {
            borderBottom: `0px solid ${secondary}`
          },
          '&&:hover:not(.Mui-disabled):not(.Mui-error):before': {
            borderBottom: `1px solid ${secondary}`
          },
          '&&:after': {
            borderBottom: `2px solid ${mindPurpMain}`
          }
        },
        input: {
          color: '#fff',
          fontWeight: 300,
          fontSize: '0.8em'
        },
      },
    },
    // MuiFormHelperText: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: '#1B1C1E',
    //       margin: 0,
    //       padding: '5px 0 0 10px'
    //     }
    //   }
    // }
  },
});
