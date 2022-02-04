import Head from "next/head";

export default function SEO({ title, description, siteTitle }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name={description} content={siteTitle} />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
}
