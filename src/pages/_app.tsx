import "../styles/globals.css";
import type { AppProps } from "next/app";
import { BaseLayout } from "../layouts/base";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </>
  );
}

export default MyApp;
