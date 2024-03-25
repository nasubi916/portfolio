import { type ReactElement } from "react";
import { Icon } from "@iconify/react";
import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
  Text,
  Flex,
  Divider,
} from "@mantine/core";
import { styled as p } from "../../styled-system/jsx";

export default function RootLayout(): ReactElement {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

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
              color={computedColorScheme === "light" ? "black" : "white"}
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
              color={computedColorScheme === "light" ? "violet.8" : "white"}
              onClick={() => {
                setColorScheme(
                  computedColorScheme === "light" ? "dark" : "light"
                );
              }}
              size="lg"
              variant="outline"
            >
              <Icon
                height={24}
                icon={
                  computedColorScheme === "light"
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
