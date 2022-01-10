import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const StyledTxtField = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.common.tertiaryLight,
  marginBottom: "1em",
  marginRight: "1em",
  "&.MuiTextField-root": {
    width: "35%",
    [theme.breakpoints.down("sm")]: {
      width: "63%",
    },
  },
}));

export const StyledBtn = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.mindPurpDark,
  padding: "1em 0.5em 1em 0.5em",
  height: "3.35em",
  fontSize: "0.875em",
  textTransform: "none",
  fontWeight: 300,
  width: "73%",
  [theme.breakpoints.down("sm")]: {
    width: "63%",
  },
}));
