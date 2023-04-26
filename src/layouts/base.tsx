import React, { ReactNode, useState } from "react";

import { NavBar } from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { HeadingLevel } from "baseui/heading";
import { themedStyled } from "../pages/_app";

const StyledLayout = themedStyled("div", ({ $theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  minHeight: "100vh"
}));
const StyledMain = themedStyled("main", ({ $theme }) => ({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  width: "100%",
  maxWidth: "100%",
  margin: "0 auto",
  padding: "0 1rem",
  height: "100%",
  overflow: "auto",
  boxSizing: "border-box",
  [`${$theme.mediaQuery.medium}`]: {
    padding: "0 2rem"
  }
}));
const BaseLayout: React.FC<{
  children: ReactNode;
  hasHeader: boolean;
}> = function ({
                 children,
                 ...props
               }: {
  children: ReactNode;
  hasHeader: boolean;
}) {
  const [hasHeader, SetHasHeader] = useState(props.hasHeader);
  return (
      <StyledLayout>
        <HeadingLevel>
          <NavBar />
          <StyledMain>{children}</StyledMain>
          <Footer />
        </HeadingLevel>
      </StyledLayout>
  );
};

export { BaseLayout };