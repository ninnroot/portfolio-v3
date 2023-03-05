import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />

        <title>Thiha (James)</title>
        <meta name="title" content="Thiha (James)" />
        <meta
          name="description"
          content="A self-taught software engineer from Myanmar. Check out what I've built."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Thiha (James)" />
        <meta
          property="og:description"
          content="A self-taught software engineer from Myanmar. Check out what I've built."
        />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/70014160?s=400&u=f367e7e50faa59f59aa0d3e7e1a45d3da7a3e9d5&v=4"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Thiha (James)" />
        <meta
          property="twitter:description"
          content="A self-taught software engineer from Myanmar. Check out what I've built."
        />
        <meta
          property="twitter:image"
          content="https://avatars.githubusercontent.com/u/70014160?s=400&u=f367e7e50faa59f59aa0d3e7e1a45d3da7a3e9d5&v=4"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
