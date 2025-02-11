// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Meta tags for responsiveness and SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A high-quality, fully functional website template with a modern dark cobalt blue theme." />
        {/* You can add additional meta tags and favicon links here */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
