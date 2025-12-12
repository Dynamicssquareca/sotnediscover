import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/favicon.png" sizes="192x192" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet"
          />

          <meta name="p:domain_verify" content="871307783afcc081111d141835a753bd" />

          {/* Google Tag Manager (head) */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T6PMBCJ9');`,
            }}
          />

          {/* Hotjar Tracking Code */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:4983538,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
            }}
          />
        </Head>

        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript
            dangerouslySetInnerHTML={{
              __html:
                '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T6PMBCJ9" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
            }}
          />

          <Main />
          <NextScript />

          {/* Zoho SalesIQ */}
          <script
          dangerouslySetInnerHTML={{
            __html: `
              var $zoho = $zoho || {};
              $zoho.salesiq = $zoho.salesiq || {
                  widgetcode: "siq24db42b123907969f273b450e1bf7256b38c9b3ce64b42d79f6952e155f88655",
                  values: {},
                  ready: function(){}
              };
              var d=document;
              s=d.createElement("script");
              s.type="text/javascript";
              s.id="zsiqscript";
              s.defer=true;
              s.src="https://salesiq.zoho.in/widget";
              t=d.getElementsByTagName("script")[0];
              t.parentNode.insertBefore(s,t);
            `,
          }}
        />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
