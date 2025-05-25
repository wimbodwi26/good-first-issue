import "@/styles/globals.css";
import Head from 'next/head';
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Good First Issues</title>
        <meta name="description" content="Find beginner-friendly open source issues" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}