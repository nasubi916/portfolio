import { type ReactElement, useReducer } from "react";
import { Icon } from "@iconify/react";
import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
  Text,
  Flex,
  Center,
} from "@mantine/core";
import { useWindowEvent } from "@mantine/hooks";
import { $colorScheme } from "../stores/option";
import { styled as p } from "../../styled-system/jsx";

export default function Header(): ReactElement {
  const [enterAnimation, toggleEnterAnimation] = useReducer(() => true, false);
  const { setColorScheme } = useMantineColorScheme();
  const colorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  $colorScheme.set(colorScheme);
  const selected = colorScheme === "light" ? "dark" : "light";

  useWindowEvent("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      toggleEnterAnimation();
    }
  });

  return (
    <p.div h={enterAnimation ? "50" : "100vh"} mt={3} mx={3}>
      {!enterAnimation && (
        <Center>
          <p.div position="absolute" textAlign="center" top="50%" zIndex={10}>
            <p.div
              animation="cursor .7s infinite alternate ,typing 1s steps(10)"
              borderRight="1px solid white"
              fontFamily="Noto Serif JP"
              fontSize={50}
              letterSpacing="5px"
              overflow="hidden"
              width="100%"
            >
              nasubi.dev
            </p.div>
            <p.div animation="fadein 3s">please Enter</p.div>
          </p.div>
        </Center>
      )}
      {enterAnimation && (
        <Flex align="center" direction="row">
          <Text size="xl">nasubi.dev</Text>
          <Flex gap={10} ml="auto">
            <ActionIcon
              aria-label="Twitter Account"
              color="indigo.8"
              component="a"
              href="https://twitter.com/nasubl_"
              size="lg"
              target="_blank"
              variant="outline"
            >
              <Icon height={24} icon="mdi:twitter" width={24} />
            </ActionIcon>
            <ActionIcon
              aria-label="Github Account"
              color={colorScheme === "light" ? "black" : "white"}
              component="a"
              href="https://github.com/nasubi916"
              size="lg"
              target="_blank"
              variant="outline"
            >
              <Icon height={24} icon="mdi:github" width={24} />
            </ActionIcon>
            <ActionIcon
              aria-label="Toggle color scheme"
              color={colorScheme === "light" ? "violet.8" : "white"}
              onClick={() => {
                setColorScheme(selected);
                $colorScheme.set(selected);
              }}
              size="lg"
              variant="outline"
            >
              <Icon
                height={24}
                icon={
                  colorScheme === "light"
                    ? "material-symbols:dark-mode-outline"
                    : "material-symbols-light:light-mode-outline"
                }
                width={24}
              />
            </ActionIcon>
          </Flex>
        </Flex>
      )}
    </p.div>
  );
}
