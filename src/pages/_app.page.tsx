import React from "react";
import App from "next/app";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider, createThemedStyled } from "baseui";
import { styletron } from "../helpers/styletron";
import { Theme } from "baseui/styles/types";

export const themedStyled = createThemedStyled<Theme>();

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <StyletronProvider value={styletron}>
        <BaseProvider theme={LightTheme}>
          <Component {...pageProps} />
        </BaseProvider>
      </StyletronProvider>
    );
  }
}
