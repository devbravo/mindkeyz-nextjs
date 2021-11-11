import React, { useState } from "react";
import Image from "next/image";
import Link from "../Link";
import { Tabs } from "@mui/material";
import { Toolbar, Grid } from "@mui/material";
import { List, ListItemIcon } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material";
import { routes } from "./Header.Data";
import { socials, socialsMobile } from "./Social.Data";
import logo from "../../public/images/Mindkeyz-Logo_Trans-White.webp";
import { StyledTab, StyledIconCont, StyledSwipeableDrawer, StyledIconButton } from "./HeaderDrawer.styles";
import { StyledBtn, StyledAppBar } from "./HeaderDrawer.styles";
import { ToolbarMargin, StyledListItem, StyledListItemText } from "./HeaderDrawer.styles";

const ElevationScroll = props => {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true, // whether or not their is a delay upon scrolling
    threshold: 0, // 0 - 100, at 0 triggers when users starts scrolling
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const Header = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);
  const iOS = typeof navigator !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{ ml: "auto", mr: "auto" }}
        aria-label='icon position tabs example'>
        {routes.map((route, index) => (
          <StyledTab key={index} component={Link} href={route.url} label={route.name} />
        ))}
      </Tabs>
      <StyledIconCont>
        {socials.map((social, index) => (
          <a
            style={{ marginRight: `${social.marginRight}`, color: "#fff" }}
            key={index}
            href={social.url}
            target='_blank'
            rel='noreferrer'>
            {social.iconName}
          </a>
        ))}
      </StyledIconCont>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <StyledSwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}>
        <ToolbarMargin />
        <List disablePadding>
          {routes.map((route, index) => (
            <StyledListItem
              key={index}
              component={Link}
              href={route.url}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
              divider
              button
              selected={value === route.activeIndex}
              sx={{ color: "white" }}>
              <ListItemIcon>{route.icon}</ListItemIcon>
              <StyledListItemText disableTypography primary={route.name} />
            </StyledListItem>
          ))}
        </List>
        <Grid item container justifyContent='space-evenly' alignItems='flex-end' sx={{ height: "100%", mb: "1em" }}>
          {socialsMobile.map((social, index) => (
            <a style={{ color: "#fff" }} key={index} href={social.url} target='_blank' rel='noreferrer'>
              {social.iconName}
            </a>
          ))}
        </Grid>
      </StyledSwipeableDrawer>
      <StyledIconButton onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
        <MenuIcon sx={{ height: "40px", width: "40px", color: "#fff" }} />
      </StyledIconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <StyledAppBar position='fixed'>
          <Toolbar disableGutters={true}>
            <StyledBtn
              component={Link}
              href='/'
              onClick={() => setValue(0)}
              sx={{ padding: "0", "&:hover": { backgroundColor: "transparent" } }}
              disableRipple>
              <Image alt='company logo' src={logo} priority />
            </StyledBtn>
            {matches ? drawer : tabs}
          </Toolbar>
        </StyledAppBar>
      </ElevationScroll>
      <ToolbarMargin />
    </React.Fragment>
  );
};

export default Header;
