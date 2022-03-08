import "tailwindcss/tailwind.css";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: GTM_ID });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
