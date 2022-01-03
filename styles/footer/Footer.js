import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import MailRoundedIcon from "@mui/icons-material/MailRounded";

export const StyledFooter = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.common.tertiary,
  width: "100%",
  zIndex: 0,
  position: "relative",
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  "& > :not(style)": {
    margin: "0.4em",
    width: "20ch",
  },
  ".&.MuiFormControl-root": {
    color: "#fff",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    width: "25ch",
  },
}));

export const StyledBtn = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.mindPurpDark,
  padding: "1em 0.5em 1em 0.5em",
  width: 0,
  height: "3.35em",
  fontSize: "0.875em",
  textTransform: "none",
  fontWeight: 300,
  borderRadius: "0.3em",
  [theme.breakpoints.down("sm")]: {
    width: "25ch !important",
  },
}));

export const StyledDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: theme.palette.common.tertiaryLight,
  margin: "3em 0",
  height: "1.5px",
  [theme.breakpoints.down("sm")]: {
    margin: "2em 0",
  },
}));

export const StyledTxtField = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.common.tertiaryLight,
  borderRadius: "0.3em",
  "&.MuiTextField-root": {
    width: "12em",
  },
  input: {
    color: "#fff",
    fontWeight: 300,
  },
}));

export const StyledListItemTxt = styled(ListItemText)(({ theme }) => ({
  fontSize: "0.8em",
  margin: "0 5em 0.4em 5em",
}));

export const StyledListItemTxtEmail = styled(ListItemText)(({ theme }) => ({
  fontSize: "0.80em",
  width: "6em",
  [theme.breakpoints.down("md")]: {
    width: "10em",
  },
}));

export const StyledMailRoundedIcon = styled(MailRoundedIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "1.3em",
}));

export const StyledAddressTyp = styled(Typography)(({ theme }) => ({
  fontSize: "0.83em",
  wordSpacing: "0.1em",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8em",
  },
}));

export const StyledGridCopy = styled(Grid)(({ theme }) => ({
  marginTop: "2em",
  paddingBottom: "0.8em",
  color: "#fff",
}));
