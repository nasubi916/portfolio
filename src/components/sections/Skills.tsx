import { useEffect, useState, type ReactElement } from "react";
import { useStore } from "@nanostores/react";
import { Icon } from "@iconify/react";
import {
  Text,
  Center,
  Group,
  Card,
  Flex,
  HoverCard,
  Anchor,
  Stack,
  ActionIcon,
  Transition,
} from "@mantine/core";
import { $colorScheme } from "../../stores/option";
import { styled as p } from "../../../styled-system/jsx";

type SkillData = {
  name: string;
  icon: string;
  description: string;
  link?: string;
};

// 仮置き
const skillList: SkillData[] = [
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
    link: "https://www.typescriptlang.org",
    description: "型がないと不安｡でも､型パズルはできない｡",
  },
  {
    name: "Vue",
    icon: "logos:vue",
    link: "https://v3.vuejs.org",
    description:
      "Vue3のComposition API + script setupが好き｡Reactに触れてから感じるVueの良さ｡双方向バインディングのコードの書きやすさは異常｡",
  },
  {
    name: "Nuxt",
    link: "https://nuxt.com",
    icon: "vscode-icons:file-type-nuxt",
    description: "Vueのフレームワーク｡正直持て余してる｡",
  },
  {
    name: "React",
    icon: "logos:react",
    link: "https://reactjs.org",
    description:
      "ドキュメントも記事も多くて詰まることが少ない｡せっかくやるならエコシステムを駆使したい｡",
  },
  {
    name: "Next",
    icon: "logos:nextjs-icon",
    link: "https://nextjs.org",
    description: "SSGしてみたいけど､プロジェクトスケールがデカすぎる｡",
  },
  {
    name: "C",
    icon: "logos:c",
    description: "授業でやるくらいでそこまで得意ではない｡",
  },
  {
    name: "Monaca",
    icon: "material-symbols:code-blocks-outline",
    link: "https://ja.monaca.io",
    description:
      "初めて触ったフレームワーク｡私のエンジニア人生はここから始まった｡",
  },
  {
    name: "Firebase",
    icon: "logos:firebase",
    link: "https://firebase.google.com",
    description: "NoSQLが本当にTypescriptと相性が悪すぎる｡二度と使いたくない｡",
  },
  {
    name: "supabase",
    icon: "logos:supabase-icon",
    link: "https://supabase.io",
    description: "SQLが使えるのが良き｡型を自動出力してくれるのが嬉しい｡Dashboardのモダン具合がすごい｡",
  },
  {
    name: "CloudFlare",
    icon: "logos:cloudflare-icon",
    link: "https://www.cloudflare.com",
    description: "これから勉強します｡",
  },
  {
    name: "VSCode",
    icon: "vscode-icons:file-type-vscode",
    link: "https://code.visualstudio.com",
    description:
      "エディターはこれ一択｡拡張機能が豊富で使いやすい｡(これ以外使ったこと無いだけ)",
  },
  {
    name: "GitHub",
    icon: "mdi:github",
    link: "https://github.com",
    description:
      "CLIは使わない｡GUIで十分｡コミット､マージ､プルリクなど一通り扱える｡GitHub Actionsは使いたいけど使いこなせてない｡",
  },
  {
    name: "python",
    icon: "logos:python",
    link: "https://www.python.org",
    description:
      "このサイトの下部にあるグラフを作るのに使いました｡pandasとお友達になりたい｡",
  },
  {
    name: "obsidian",
    icon: "logos:obsidian-icon",
    link: "https://obsidian.md",
    description:
      "markdown記法で書けるメモアプリ｡開発に直接活きることはなくとも､アイデアや思考をまとめるのに便利｡QoL爆上がり｡今はBlogのCMSとして使えないか検討中｡",
  },
];

function Skill({
  skill,
  selected,
}: {
  skill: SkillData;
  selected: number;
}): ReactElement {
  const [before, setBefore] = useState(0);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (selected !== before) {
      setOpened(false);
      setBefore(selected);
      setTimeout(() => {
        setOpened(true);
      }, 100);
    }
  }, [selected]);

  return (
    <Transition
      duration={200}
      keepMounted
      mounted={opened}
      timingFunction="ease"
      transition={{
        in: { opacity: 1, transform: "translateY(0)" },
        out: { opacity: 0, transform: "translateY(20px)" },
        common: { transformOrigin: "top" },
        transitionProperty: "transform, opacity",
      }}
    >
      {(transitionStyle) => (
        <p.div fontFamily="Noto sans JP" fontSize={25}>
          <Card
            key={skill.name}
            h={200}
            mx={30}
            padding="md"
            radius="xl"
            shadow="xl"
            style={{ ...transitionStyle }}
            w="auto"
          >
            <Flex align="center" direction="row" gap="5" mb={10}>
              <Icon height={30} icon={skill.icon} width={30} />
              <Text inherit>{skill.name}</Text>
            </Flex>
            <p.div fontSize={16}>
              <Text>{skill.description}</Text>
            </p.div>
          </Card>
        </p.div>
      )}
    </Transition>
  );
}

export default function Skills(): ReactElement {
  const colorScheme = useStore($colorScheme);
  const [selected, setSelected] = useState(0);

  return (
    <p.div
      bg={colorScheme === "light" ? "gray.400" : "gray.800"}
      fontFamily="Noto sans JP"
      fontSize={30}
      pb={20}
      w="100%"
    >
      <Center my={20}>
        <Text ff="Noto serif jp" inherit mx={20}>
          Skills
        </Text>
      </Center>
      <Center my={20}>
        <p.div mx={10} my={5} rounded="full">
          <Card h="auto" radius="xl" shadow="xl">
            <Group align="center" gap={5} justify="center" py={10}>
              {skillList.map((skill) => (
                <HoverCard
                  key="skill"
                  closeDelay={400}
                  openDelay={200}
                  position="top"
                  shadow="xl"
                >
                  <HoverCard.Target>
                    <ActionIcon
                      onClick={() => {
                        setSelected(skillList.indexOf(skill));
                      }}
                      size="xl"
                      variant="transparent"
                    >
                      <Icon
                        key={skill.name}
                        height={40}
                        icon={skill.icon}
                        width={40}
                      />
                    </ActionIcon>
                  </HoverCard.Target>
                  <HoverCard.Dropdown>
                    <p.div fontFamily="Noto sans JP">
                      <Group>
                        <Icon
                          key={skill.name}
                          height={50}
                          icon={skill.icon}
                          width={50}
                        />
                        <Stack gap={5}>
                          <Text
                            fw={700}
                            inherit
                            size="sm"
                            style={{ lineHeight: 1 }}
                          >
                            {skill.name}
                          </Text>
                          <Anchor
                            c="dimmed"
                            href={skill.link}
                            size="xs"
                            style={{ lineHeight: 1 }}
                            target="_blank"
                          >
                            {skill.link}
                          </Anchor>
                        </Stack>
                      </Group>
                      <Text inherit mt="md" size="sm">
                        ここに概要とGithubのスター数とかがあれば書く
                      </Text>
                      <Group gap="xl" mt="md">
                        <Text inherit size="sm">
                          <b>????</b> Stars
                        </Text>
                      </Group>
                    </p.div>
                  </HoverCard.Dropdown>
                </HoverCard>
              ))}
            </Group>
          </Card>
        </p.div>
      </Center>
      <Center>
        {/* <p.div w={1200}>
          <Group
            align="center"
            justify="center"
            style={{ columnGap: 68 }}
            wrap="wrap"
          >
          {skillList.map((skill) => (
            ))}
            </Group>
          </p.div> */}

        <Skill selected={selected} skill={skillList[selected]} />
      </Center>
    </p.div>
  );
}
