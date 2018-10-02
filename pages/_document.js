import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta
            name="google-site-verification"
            content="KWPLUXT2KKaqjtm9WBDpfkCMV58i7VmcFOW2_kPsuuM"
          />
          <script
            type="text/javascript"
            async
            src="https://www.google-analytics.com/analytics.js"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Ubuntu:400,500,700"
            rel="stylesheet"
          />
          <script src="//cdn.iframe.ly/embed.js" async />

          <title>Johannes Walenta</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
