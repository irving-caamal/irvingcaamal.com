import React from "react";
import { Stack as stackData } from "../utils/Stack";
import { BaseLayout } from "../layouts/base";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { HeadingLarge, HeadingSmall } from "baseui/typography";
import { ListHeading, ListItem } from "baseui/list";
import { useStyletron } from "baseui";
import { Button, SIZE, SHAPE } from "baseui/button";
import { Heading } from "baseui/heading";

function Stack() {
  const [css] = useStyletron();
  return (
    <BaseLayout hasHeader={false}>
      <FlexGrid
        flexDirection={"column"}
        justifyContent="center"
        alignItems={"flex-start"}
        className="flex flex-col justify-center items-start gap-x-4 w-full px:4 md:px-12"
      >
        <FlexGridItem>
          <Heading className="text-6xl mb-5">My tech stack</Heading>
        </FlexGridItem>
        <FlexGridItem flexDirection={"column"}>
          <FlexGrid justifyContent={"center"}>
            {stackData.map((item, index) => (
              <div key={item.id}>
                <ListHeading
                  heading={item.title}
                  endEnhancer={() => (
                    <Button size={SIZE.compact} shape={SHAPE.pill}>
                      Action
                    </Button>
                  )}
                  maxLines={1}
                />
                <ul
                  className={css({
                    width: "100%",
                    paddingLeft: 0,
                    paddingRight: 0
                  })}
                >
                  {item.items &&
                    item.items.map((item, index) => (
                      <ListItem key={item.id}>{item.name}</ListItem>
                    ))}
                </ul>
              </div>
            ))}
          </FlexGrid>
        </FlexGridItem>
      </FlexGrid>
    </BaseLayout>
  );
}

export default Stack;
