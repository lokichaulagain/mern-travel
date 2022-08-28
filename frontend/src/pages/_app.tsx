import type { AppProps } from "next/app";
import { useEffect } from "react";
import "../styles/main.scss";
import "swiper/css/bundle";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
