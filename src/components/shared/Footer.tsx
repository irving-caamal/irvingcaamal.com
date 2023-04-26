import React from "react";
import { Block } from "baseui/block";
import { themedStyled } from "../../pages/_app";

const StyledFooter = themedStyled(
  "footer",
  ({ $theme: { typography, sizing, colors } }) => ({
    ...typography.font300,
    bottom: 0,
    color: colors.contentPrimary,
    backgroundColor: colors.backgroundPrimary,
    width: "100%",
    textAlign: "center"
  })
);

const StyledLink = themedStyled("a", ({ $theme }) => ({
  textDecoration: "none",
  color: $theme.colors.contentPrimary,
  display: "inline-block",
  cursor: "pointer",
  marginLeft: "32px",
  ":first-child": {
    marginLeft: "0"
  },
  ":focus": {
    outline: `3px solid ${$theme.colors.accent}`,
    outlineOffset: "3px"
  },
  ":hover": {
    color: $theme.colors.primary,
    textDecoration: "none"
  }
}));

function Footer() {
  return (
    <StyledFooter>
      <Block>Thanks for visiting!</Block>
      <Block paddingBottom="scale1000">
        <StyledLink
          href="https://github.com/irvv17/Nextjs-Baseweb-Boilerplate"
          target="_blank"
        >
          You can check source Code on GitHub
        </StyledLink>
      </Block>
    </StyledFooter>
  );
}

export default Footer;
