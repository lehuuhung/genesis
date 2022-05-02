import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import Head from 'next/head';
import '../styles/global.css';
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Head>
          <title>Next.js app - Boilerplate</title>
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="description" content="A simple project starter to work with Typescript, React, NextJS and Styled Components" />
        </Head>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default App;
