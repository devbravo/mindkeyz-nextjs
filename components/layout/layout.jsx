import React from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function Layout({ children }) {
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.up('sm'))
  
  return (
    <React.Fragment>
      <Header />
      <main style={{marginTop: matchesSM ? '4em' : '3.5em'}}>{children}</main>
      <Footer />
    </React.Fragment>
  );
}
