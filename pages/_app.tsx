import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

import '../styles/globals.css'

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        {/* <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link href='https://unpkg.com/maplibre-gl@2.4.0/dist/maplibre-gl.css' rel='stylesheet' />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
