import { type ReactElement, useState,useRef  } from "react";
import { Icon } from "@iconify/react";
import {
  Text,
  Center,
  Flex,
  em,
  Group,
  ActionIcon,
  Card,
  Spoiler,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { BarChart } from "@mantine/charts";
import { useStore } from "@nanostores/react";
import boosted from "../../assets/boosted.json";
import { $colorScheme, $isMobile } from "../../stores/option";
import { styled as p } from "../../../styled-system/jsx";

type HobbyData = {
  name: string;
  description: string;
};

// 仮置き
const hobbiesList: HobbyData[] = [
  {
    name: "Program",
    description:
      "Webアプリケーションを作るのが好きです｡最近はReact + Vite + TypeScriptで開発しています｡高校の頃はVueでコードを書いたので､Reactの仕様に苦戦している｡特に単方向バインディングとエコシステム辺りが違いすぎて勉強中｡",
  },
  {
    name: "Read",
    description:
      "本好きが高じて本屋でバイトをはじめました｡愛書は中村文則の｢遮光｣です｡",
  },
  {
    name: "Anime",
    description:
      "placement text placement text placement text placement text placement text placement text placement text placement text placement text placement text placement text placement text placement text placement text placement text placement text placement text placement text placement text placement text placement text placement text placement text placement text placement text ",
  },
  {
    name: "Game",
    description:
      "placement text placement text placement text placement text placement text ",
  },
  {
    name: "Movie",
    description:
      "placement text placement text placement text placement text placement text ",
  },
  {
    name: "History",
    description:
      "ヨーロッパ史が大好き｡特にウェストファリア体制～第一次世界大戦に至るまでなら結構語れますし､語り合いたい｡推し国家はロシア帝国です｡",
  },
  {
    name: "Write",
    description:
      "マークダウン記法で書けるobsidianを使って日記を書いています｡これからは外へ発信もしていきたい｡",
  },
];

function Hobby({
  name,
  description,
}: {
  name: string;
  description: string;
}): ReactElement {
  $isMobile.set(useMediaQuery(`(max-width: ${em(750)})`) ?? false);
  const isMobile = $isMobile.value ?? false;
  return (
    <Card h="auto" radius="lg" shadow="xl" w={isMobile ? 400 : 400}>
      <Flex align="center" direction="column" gap={10}>
        <Text inherit>{name}</Text>
        <p.div fontSize={16}>
          <Spoiler hideLabel="オタクの長尺の語りウザいから消すボタン" maxHeight={200} showLabel="もっとみせる">
            <Text inherit>{description}</Text>
          </Spoiler>
        </p.div>
      </Flex>
    </Card>
  );
}

export default function Hobbies(): ReactElement {
  const colorScheme = useStore($colorScheme);
  const [isFull, setIsFull] = useState(false);

  $isMobile.set(useMediaQuery(`(max-width: ${em(750)})`) ?? false);
  const isMobile = $isMobile.value ?? false;
  return (
    <p.div
      bg={colorScheme === "light" ? "gray.400" : "gray.800"}
      fontFamily="Noto sans JP"
      fontSize={30}
      pb={20}
      w="100%"
    >
      <Center>
        <Text ff="Noto serif jp" inherit my={20}>
          Hobbies
        </Text>
      </Center>
      <Center>
        <Flex align="center" direction="column" gap={20}>
          <p.div fontSize={10} position="relative">
            <BarChart
              data={boosted}
              dataKey="year_month"
              gridColor={colorScheme === "light" ? "gray.9" : "gray.3"}
              h={300}
              series={[
                { name: "Program", color: "red.6" },
                { name: "Read", color: "orange.6" },
                { name: "Study", color: "yellow.6" },
                { name: "Write", color: "lime.6" },
                { name: "anime", color: "cyan.6" },
                { name: "game", color: "indigo.6" },
                { name: "movie", color: "violet.6" },
              ]}
              textColor={colorScheme === "light" ? "gray.9" : "gray.3"}
              tooltipAnimationDuration={200}
              type={isFull ? "percent" : "stacked"}
              valueFormatter={(value) => {
                const hours = Math.floor(value / 3600);
                const minutes = Math.floor((value % 3600) / 60);
                const seconds = value % 60;
                return `${hours}h ${minutes}m ${seconds}s`;
              }}
              w={isMobile ? 400 : 700}
            />
            <p.div position="absolute" right={0} top={-7}>
              <ActionIcon
                onClick={() => {
                  setIsFull(!isFull);
                }}
              >
                <Icon
                  height={24}
                  icon="mdi:swap-horizontal-circle-outline"
                  width={24}
                />
              </ActionIcon>
            </p.div>
          </p.div>
          <Group align="start" gap={40} justify="center" m={3} wrap="wrap">
            {hobbiesList.map((hobby) => (
              <Hobby key={hobby.name} {...hobby} />
            ))}
          </Group>
        </Flex>
      </Center>
    </p.div>
  );
}
