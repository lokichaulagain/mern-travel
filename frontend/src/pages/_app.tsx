import type { AppProps } from "next/app";
import { useEffect } from "react";
import "../styles/main.scss";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // import("bootstrap/dist/js/bootstrap");
    import("bootstrap");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
