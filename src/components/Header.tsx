import { type ReactElement } from "react";
import { useStore } from "@nanostores/react";
import { Icon } from "@iconify/react";
import {
  ActionIcon,
  useMantineColorScheme,
  Text,
  Flex,
  Divider,
} from "@mantine/core";
import { $colorScheme } from "../stores/option";
import { styled as p } from "../../styled-system/jsx";

export default function Header(): ReactElement {
  const { setColorScheme } = useMantineColorScheme();
  const colorScheme = useStore($colorScheme);
  const selected = colorScheme === "light" ? "dark" : "light";

  return (
    <p.div h={50}>
      <p.div m={3}>
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
      </p.div>
      <Divider size="sm" />
    </p.div>
  );
}
