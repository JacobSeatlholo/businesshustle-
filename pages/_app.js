// pages/_app.js

import 'nextra-theme-docs/style.css';
import Script from 'next/script';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="facebook-domain-verification" content="u43o0mbmp0qo80lvlgf2oxcrfafmr5" />
      </Head>
      {/* Google tag (gtag.js) */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-786327701"/>
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-786327701');
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
