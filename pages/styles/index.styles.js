import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartRounded";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

export const StyledStack = styled(Stack)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  color: '#fff', 
}));

export const StyledGrid = styled(Grid)(({ theme }) => ({
  marginTop: "-0.2rem",
  backgroundImage: `linear-gradient(#6600FF, #413E43)`,
  height: "auto",
}));

export const StyledHowToContainer = styled(Grid)(({ theme }) => ({
  paddingTop: "2rem",
  marginBottom: "8rem",
  color: "#fff",
  [theme.breakpoints.up("md")]: {
    paddingTop: "3em",
  },
}));

export const StyledH6Typo = styled(Typography)(({ theme }) => ({
  marginTop: "0.1em",
  marginBottom: 0,
  fontSize: "0.8em",
  [theme.breakpoints.up("md")]: {
    marginTop: "0.5em",
    marginBottom: "0.2em",
    fontSize: '1.25em'
  },
}));

export const StyledH4BannerTypo = styled(Typography)(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: '2em',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1em',
    textAlign: 'center'
  }
}))

export const StyledH6BannerTypo = styled(Typography)(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: '1em',
    marginBottom: '1em'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.50em',
    marginBottom: '1.5em'
  }
}))

export const StyledBtn = styled(Button)(({ theme }) => ({
  color: "black",
  backgroundColor: "#fff",
  fontSize: "0.9em",
  fontFamily: "Raleway",
  fontWeight: "700",
  textTransform: "capitalize",
  letterSpacing: 1.3,
  borderRadius: "8em",
  padding: "0.7em 1.5em",
  '&.MuiButton-root': {
    '&:hover': {
      backgroundColor: theme.palette.common.secondaryDarker
    }
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '0.8em'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.6em'
  }
}));

export const StyledShoppingCartIcon = styled(ShoppingCartIcon)(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem'
  }
}))