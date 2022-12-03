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

        <title>Ninnroot</title>
        <meta name="title" content="Ninnroot" />
        <meta
          name="description"
          content="I am Thiha, a self-taught 18-year old web developer based in Singapore. I have over 3 years of experience in the programming field, and am excellent in developing RESTful APIs."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thiha.net/" />
        <meta property="og:title" content="Ninnroot" />
        <meta
          property="og:description"
          content="I am Thiha, a self-taught 18-year old web developer based in Singapore. I have over 3 years of experience in the programming field, and am excellent in developing RESTful APIs."
        />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/70014160?v=4"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://thiha.net/" />
        <meta property="twitter:title" content="Ninnroot" />
        <meta
          property="twitter:description"
          content="I am Thiha, a self-taught 18-year old web developer based in Singapore. I have over 3 years of experience in the programming field, and am excellent in developing RESTful APIs."
        />
        <meta
          property="twitter:image"
          content="https://avatars.githubusercontent.com/u/70014160?v=4"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
