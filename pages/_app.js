import 'nextra-theme-docs/style.css'

export default function Nextra({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// pages/_app.tsx or _app.js

import Script from 'next/script';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-786327701"
      />
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

