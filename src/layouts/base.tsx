import React, { useState } from "react";
import { Block } from "baseui/block";

import { NavBar } from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { HeadingLevel } from "baseui/heading";

const BaseLayout: React.FC<{
  children: any;
  hasHeader: boolean;
  toggleTheme?: () => void;
}> = function (props) {
  const [hasHeader, SetHasHeader] = useState(props.hasHeader);
  return (
    <>
      <HeadingLevel>
        <NavBar />
        {hasHeader && (
          <Block as={"main"} paddingRight={"5vw"} paddingLeft={"5vw"}>
            {props.children}
          </Block>
        )}
        {!hasHeader && (
          <Block as={"main"} paddingRight={"5vw"} paddingLeft={"5vw"}>
            {props.children}
          </Block>
        )}
        {hasHeader && (
          <Block
            backgroundColor="backgroundPrimary"
            color="contentPrimary"
            marginTop="scale300"
            display="flex"
            paddingTop="scale400"
            justifyContent="center"
          >
            {props.children}
          </Block>
        )}
        <Footer />
      </HeadingLevel>
    </>
  );
};

export { BaseLayout };
