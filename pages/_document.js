import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <title>My page title</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link
        href='https://api.fontshare.com/v2/css?f[]=satoshi@900,700&display=swap'
        rel='stylesheet'
      />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
