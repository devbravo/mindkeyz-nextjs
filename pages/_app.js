import React, { useState } from "react";
import styles from '../styles/globals.css'
import Layout from "../components/layout/layout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../components/theme/Theme";


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} className={styles} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
