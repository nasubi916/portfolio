import { type ReactElement } from "react";
import { Icon } from "@iconify/react";
import "@fontsource/roboto";
import { Card, Flex, Text } from "@mantine/core";
import { css } from "../../styled-system/css";

export default function Home(): ReactElement {
  return (
    <h1>
      <Card>
        <Flex direction="row">
          <Text>nasubi</Text>
          <Icon icon="twemoji:eggplant" />
        </Flex>
      </Card>
      <div
        className={css({
          fontSize: "2xl",
          fontWeight: "bold",
          fontFamily: "sans-serif",
        })}
      >
        Hello 🐼!
      </div>
    </h1>
  );
}
