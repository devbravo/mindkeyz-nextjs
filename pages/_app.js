import Script from 'next/script'
import Head from 'next/head'
import styles from "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../components/theme/Theme";
import { wrapper } from "../store/store";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name='robots' content='all' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Script strategy='afterInteractive' src="https://www.googletagmanager.com/gtag/js?id=UA-68302938-1"/>
      <Script id='google-analytics' strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-68302938-1', { page_path: window.location.pathname });
        `,
      }}
      />
      <Script strategy='afterInteractive' src="https://airbit.com/assets/html5/js/gatracking.js?gatracking=UA-68302938-1"/>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} className={styles} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default wrapper.withRedux(MyApp);
