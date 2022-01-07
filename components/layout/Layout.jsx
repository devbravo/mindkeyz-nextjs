import React from "react";
import dynamic from "next/dynamic";
import { useTheme, useMediaQuery } from "@mui/material";
import Header from "../navigation/Navigation";
// import Footer from "../footer/Footer";
const Footer = dynamic(() => import("../footer/Footer"));

const Layout = ({ children }) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <React.Fragment>
      <Header />
      <main style={{ marginTop: matchesSM ? "4em" : "3.5em" }}>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
