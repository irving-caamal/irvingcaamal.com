import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { Heading } from "baseui/heading";
import { BaseLayout } from "../layouts/base";
import { ParagraphLarge, ParagraphMedium } from "baseui/typography";

const Home: React.FC = () => {
  return (
    <BaseLayout hasHeader={false}>
      <FlexGrid
        padding={"scale800"}
        justifyContent="center"
        alignContent={"center"}
        alignItems={"center"}
      >
        <FlexGridItem flexGridColumnCount={[1]}>
          <Heading styleLevel={3}>
            Systems Engineer / Full Stack Web Developer
          </Heading>
        </FlexGridItem>
        <FlexGridItem>
          <ParagraphLarge>
            +6 years of experience, developing software products and solutions
            in B2B and B2C industries, working with backend and frontend. My
            work is based on promoting high-quality, well-tested, and resilient
            software products, which satisfy business and/or customer needs.
          </ParagraphLarge>
          <ParagraphLarge>
            I’m currently working mostly with MERN and MEVN stacks, Solid JS/TS
            skills with React.JS and Vue.JS and its full-stack frameworks:
            Nuxt.js and Next.js respectively.
          </ParagraphLarge>
          <ParagraphLarge>
            Highly experienced with relational databases such as PostgreSQL,
            MySQL, and MSSQL, and also with non-relational databases like
            MongoDB.
          </ParagraphLarge>
          <ParagraphLarge>
            Always looking for personal and professional growth.
          </ParagraphLarge>
        </FlexGridItem>
      </FlexGrid>
    </BaseLayout>
  );
};

export default Home;
