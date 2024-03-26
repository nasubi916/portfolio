import {
  useEffect,
  useMemo,
  useReducer,
  useState,
  type ReactElement,
} from "react";
import { useStore } from "@nanostores/react";
import { Icon } from "@iconify/react";
import {
  Text,
  Center,
  Group,
  Card,
  Flex,
  em,
  Collapse,
  Box,
  Timeline,
  ActionIcon,
  Divider,
  Skeleton,
} from "@mantine/core";
import { useMediaQuery, useHover, useInViewport } from "@mantine/hooks";
import { $colorScheme, $isMobile } from "../../stores/option";
import { styled as p } from "../../../styled-system/jsx";

type ExperienceData = {
  name: string;
  date: string;
  description?: string;
  state: "done" | "doing" | "future";
  middle?: string;
};

// 仮置き
const ExperiencesList: ExperienceData[] = [
  {
    name: "誕生",
    date: "2005年9月",
    state: "done",
  },
  {
    name: "愛知工業大学名電高等学校 - 情報科学科 - コンピュータシステム",
    date: "2021年4月 - 2024年3月",
    state: "done",
  },
  {
    name: "情報システム部",
    date: "2021年4月 - 2024年3月",
    state: "done",
    description: "ここで人生は好転した｡",
  },
  {
    name: "ITパスポート合格",
    date: "2021年5月",
    state: "done",
    description: "情報システム部史上最速で取得しました。",
  },
  {
    name: "基本情報技術者試験合格",
    date: "2024年3月",
    state: "done",
    description: "まだ合格見込みという段階だけど､多分合格してるはず｡",
  },
  {
    name: "愛知工業大学 - 情報科学部 - 情報科学科 - コンピュータシステム専攻",
    date: "2024年4月 - 現在",
    state: "doing",
    description: "入学｡",
  },
  {
    name: "システム工学研究会",
    date: "2024年4月 - 現在",
    state: "doing",
    description: "入サークル｡",
  },
];

function Experience({
  experience,
  index,
}: {
  experience: ExperienceData;
  index: number;
}): ReactElement {
  const { ref, inViewport } = useInViewport();
  const [finished, updateFinished] = useReducer(() => true, false);

  useMemo(() => {
    if (inViewport) {
      updateFinished();
    }
    return () => {};
  }, [inViewport, experience.name]);

  return (
    <p.div position="relative">
      <p.div
        animation={inViewport || finished ? "fadein 1s" : ""}
        display={inViewport || finished ? "" : "none"}
      >
        {index !== 0 && (
          <Group h={100} my={10}>
            <div />
            <Divider
              color="gray"
              orientation="vertical"
              size="xl"
              variant={experience.state === "done" ? "solid" : "dashed"}
            />
            <Text>{experience?.middle}</Text>
          </Group>
        )}
        <Flex align="center" direction="row">
          <p.div
            aspectRatio="square"
            bg={experience.state === "done" ? "gray.400" : ""}
            border={experience.state === "doing" ? "4px solid" : ""}
            borderColor="gray.400"
            borderRadius={100}
            h={10}
            w="auto"
          />
          <Flex direction="column" ml={10}>
            <Text lineClamp={3} size="xl">
              {experience.name}
            </Text>
            <Text size="sm">{experience.date}</Text>
            <Text size="md">{experience.description}</Text>
          </Flex>
        </Flex>
      </p.div>
      <p.div ref={ref} bottom={-300} position="absolute" />
    </p.div>
  );
}

export default function Experiences(): ReactElement {
  $isMobile.set(useMediaQuery(`(max-width: ${em(750)})`) ?? false);
  const isMobile = $isMobile.value ?? false;
  return (
    <p.div fontFamily="Noto sans JP" fontSize={30} pb={20} w="100%">
      <Center>
        <Text ff="Noto serif jp" inherit my={20}>
          Experiences
        </Text>
      </Center>
      <Center>
        <p.div h={2000} m={3} w={isMobile ? 500 : 700}>
          {ExperiencesList.map((experience, index) => (
            <Experience
              key={experience.name}
              experience={experience}
              index={index}
            />
          ))}
        </p.div>
      </Center>
    </p.div>
  );
}
