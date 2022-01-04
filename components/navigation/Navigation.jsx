import React, { useState, useEffect } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "../utility/Link";
import { Tabs } from "@mui/material";
import { Toolbar, Grid } from "@mui/material";
import { List, ListItemIcon } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { routes } from "../../data/navigation/Navigation";
import { socials, socialsMobile } from "../../data/navigation/Social";
import { StyledTab, StyledIconCont, StyledSwipeableDrawer, StyledIconButton } from "../../styles/navigation/Navigation";
import { StyledBtn, StyledAppBar } from "../../styles/navigation/Navigation";
import { ToolbarMargin, StyledListItem, StyledListItemText } from "../../styles/navigation/Navigation";
import logo from "../../public/images/Mindkeyz-Logo_Trans-White.webp";
import ElevationScroll from "../utility/ElevationScroll";

const Navigation = () => {
  const [value, setValue] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);

  const theme = useTheme();
  const router = useRouter();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const iOS = typeof navigator !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent);

  useEffect(() => {
    [...routes].forEach(route => {
      switch (router.pathname) {
        case `${route.url}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
          }
          break;
        default:
          break;
      }
    });
  }, [value, router.pathname]);

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
          <StyledTab
            key={index}
            component={Link}
            href={route.url}
            label={route.name}
            aria-controls={`simple-tabpanel-${index}`}
          />
        ))}
      </Tabs>
      <StyledIconCont>
        {socials.map((social, index) => (
          <a
            style={{ marginRight: `${social.marginRight}`, color: "#fff" }}
            key={index}
            href={social.url}
            target='_blank'
            rel='noreferrer'
            aria-label='social-media-icons'>
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
      <StyledIconButton onClick={() => setOpenDrawer(!openDrawer)} disableRipple aria-label='main menu'>
        {!openDrawer ? (
          <MenuRoundedIcon sx={{ height: "36px", width: "36px", color: "#fff" }} />
        ) : (
          <CloseRoundedIcon sx={{ height: "36px", width: "36px", color: "#fff" }} />
        )}
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
    </React.Fragment>
  );
};

export default Navigation;
