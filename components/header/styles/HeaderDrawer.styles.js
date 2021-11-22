import { styled } from "@mui/material/styles";
import { AppBar } from "@mui/material";
import Button from "@mui/material/Button";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import IconButton from "@mui/material/IconButton";
import { ListItem, ListItemText } from "@mui/material";
import { Tab } from "@mui/material";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.modal + 1,
  backgroundColor: theme.palette.common.tertiary,
}));

export const ToolbarMargin = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
  marginBottom: "0.75em",
  [theme.breakpoints.between("sm", "md")]: { marginBottom: "1em" },
}));

export const StyledTab = styled(Tab)(({ theme }) => ({
  ...theme.typography.tab,
  minWidth: 10,
  color: "#fff",
  padding: "16px 6px",
  margin: "0px 5px",
  "&.Mui-selected": {
    color: "#fff",
  },
}));

export const StyledBtn = styled(Button)(({ theme }) => ({
  width: "10em",
  height: "1.9em",
  position: "absolute",
  top: "1.5em",
  left: "4em",
  [theme.breakpoints.down("md")]: {
    left: "1em",
  },
  [theme.breakpoints.down("sm")]: {
    width: "9em",
    height: "0.9em",
    top: "1.65em",
  },
}));

export const StyledIconCont = styled("div")(({ theme }) => ({
  position: "absolute",
  right: "4em",
  bottom: "1em",
}));

export const StyledSwipeableDrawer = styled(SwipeableDrawer)(({ theme }) => ({
  ".MuiDrawer-paper": {
    backgroundColor: theme.palette.common.tertiary,
  },
  width: "100%",
  height: "100%",
  zIndex: 1200
}));

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  ...theme.typography.tab,
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
  "&.Mui-selected": {
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

export const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  ...theme.typography.tab,
  "&.Mui-selected": {
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.2em",
    fontWeight: 700,
  },
}));

export const StyledIconButton = styled(IconButton)({
  marginLeft: "auto",
  "&:hover": {
    backgroundColor: "transparent",
  },
});
