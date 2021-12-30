import React from "react";
import styles from '../styles/globals.css'
import Layout from "../components/layout/Layout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../components/theme/Theme";
import { wrapper } from '../store/store';


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} className={styles} />
      </Layout>
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
