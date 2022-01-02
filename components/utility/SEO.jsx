import Head from "next/head";

export default function SEO({ title, description, siteTitle }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name={description} content={siteTitle} />
      <link rel='icon' href='/favicon.ico' />

      {/* <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:site_name' content={siteTitle} />
      <meta property='twitter:card' content='summary' />
      <meta property='twitter:creator' content={config.social.twitter} />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} /> */}
    </Head>
  );
}
