import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { BaseLayout } from "../layouts/base";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </ThemeProvider>
  );
}

export default MyApp;
