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
import "@fontsource/roboto";
import "@mantine/core/styles.css";
import "../global.css";

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
          <ActionIcon
            aria-label="Toggle color scheme"
            ml="auto"
            onClick={() => {
              setColorScheme(
                computedColorScheme === "light" ? "dark" : "light"
              );
            }}
            size="lg"
            variant="default"
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
      </p.div>
      <Divider size="sm" />
    </p.div>
  );
}
