import React from "react";
import type { NextPage } from "next";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { Heading, HeadingLevel } from "baseui/heading";
import { ChevronRight, Search } from "baseui/icon";
import { StatefulMenu } from "baseui/menu";
import { ListItemLabel, MenuAdapter, ARTWORK_SIZES } from "baseui/list";

import { BaseLayout } from "../layouts/base";
import { Monitor } from "react-feather";

const projects = [
  {
    icon: Monitor,
    title: "Rebrand Project",
    description: "Rebranding of the company's website",
    href: "https://www.linkedin.com/in/irving-caamal/"
  }
];

const Projects: NextPage = () => {
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
              <Heading styleLevel={1}>Projects</Heading>
            </FlexGridItem>
            <FlexGridItem
              display={"flex"}
              justifyContent="center"
              alignContent={"center"}
              alignItems={"center"}
              flexWrap
            >
              <StatefulMenu
                items={projects}
                onItemSelect={() => console.log("select")}
                overrides={{
                  List: {
                    style: {
                      height: "300px",
                      width: "450px"
                    }
                  },
                  Option: {
                    props: {
                      overrides: {
                        ListItem: {
                          component: React.forwardRef((props: any, ref) => (
                            <MenuAdapter
                              {...props}
                              ref={ref}
                              artwork={props.item.icon}
                              artworkSize={ARTWORK_SIZES.LARGE}
                              endEnhancer={() => <ChevronRight />}
                            >
                              <ListItemLabel description={props.item.subtitle}>
                                {props.item.title}
                              </ListItemLabel>
                            </MenuAdapter>
                          ))
                        }
                      }
                    }
                  }
                }}
              />
            </FlexGridItem>
          </FlexGrid>
        </HeadingLevel>
      </BaseLayout>
    </>
  );
};

export default Projects;
