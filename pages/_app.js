import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "@/styles/globals.css";
import "@/styles/header.css";
import "@/styles/footer.css";

import Layout from "@/components/Layout";
import Head from "next/head";

function MyAppWithLayout({ Component, pageProps }) {

  // 🔹 Remove Google srsltid parameter (optional cleanup)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (url.searchParams.has("srsltid")) {
        url.searchParams.delete("srsltid");
        window.history.replaceState({}, "", url.pathname + url.search);
      }
    }
  }, []);

  return (
    <>
      <Layout faq={pageProps.faq}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyAppWithLayout;
