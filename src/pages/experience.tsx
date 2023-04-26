import type { NextPage } from "next";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { Heading, HeadingLevel } from "baseui/heading";
import { BaseLayout } from "../layouts/base";

const Home: NextPage = () => {
  return (
    <>
      <BaseLayout hasHeader={false}>
        <HeadingLevel>
          <FlexGrid
            flexGridColumnCount={[1]}
            backgroundColor="backgroundPrimary"
            color="contentPrimary"
            marginTop="scale300"
            paddingLeft={"10vw"}
            paddingRight={"10vw"}
            justifyContent="center"
            alignContent={"center"}
            alignItems={"center"}
          >
            <FlexGridItem flexGridColumnCount={[1]}>
              <Heading styleLevel={1}>Experience</Heading>
            </FlexGridItem>
          </FlexGrid>
        </HeadingLevel>
      </BaseLayout>
    </>
  );
};

export default Home;
