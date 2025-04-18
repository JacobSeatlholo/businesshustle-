import 'nextra-theme-docs/style.css'

export default function Nextra({ Component, pageProps }) {
  return <Component {...pageProps} />
}

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-786327701">
</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-786327701');
</script>
