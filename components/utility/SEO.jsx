import Head from "next/head";

export default function SEO({ description, title, siteTitle }) {
  return (
    <Head>
      <title>Mindkeyz | Buy dancehall & afrobeats online</title>
      <meta
        name='description'
        content='Purchase & Download Beats Online. Download beats from a hit-making music producer duo. 
      Mindkeyz brings you more than 250+ dancehall, afrobeat and trap instrumentals.'
      />
      <link rel='icon' href='/favicon.ico' />
      {/* <link rel="preload" href="https://Mindkeyz.infinity.airbit.com?config_id=8072&embed=1" as='document' crossOrigin></link> */}

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
