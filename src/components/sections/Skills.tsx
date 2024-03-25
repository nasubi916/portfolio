import { type ReactElement } from "react";
import { useStore } from "@nanostores/react";
import { Icon } from "@iconify/react";
import { Text, Center, Group, Card, Flex } from "@mantine/core";
import { $colorScheme } from "../../stores/option";
import { styled as p } from "../../../styled-system/jsx";

type SkillData = {
  name: string;
  icon: string;
  description: string;
};

// 仮置き
const skillList: SkillData[] = [
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
    description: "型がないと不安｡でも､型パズルはできない｡",
  },
  {
    name: "Vue",
    icon: "logos:vue",
    description:
      "Vue3のComposition API + script setupが好き｡Reactに触れてから感じるVueの良さ｡双方向バインディングのコードの書きやすさは異常｡",
  },
  {
    name: "Nuxt",
    icon: "vscode-icons:file-type-nuxt",
    description: "Vueのフレームワーク｡正直持て余してる｡",
  },
  {
    name: "React",
    icon: "logos:react",
    description:
      "ドキュメントも記事も多くて詰まることが少ない｡せっかくやるならエコシステムを駆使したい｡",
  },
  {
    name: "Next",
    icon: "logos:nextjs-icon",
    description: "SSGしてみたいけど､バンドルサイズがでけえ｡",
  },
  {
    name: "C",
    icon: "logos:c",
    description: "授業でやるくらいでそこまで得意ではない｡",
  },
  {
    name: "Monaca",
    icon: "logos:monaca",
    description:
      "初めて触ったフレームワーク｡私のエンジニア人生はここから始まった｡",
  },
  {
    name: "Firebase",
    icon: "logos:firebase",
    description: "NoSQLが本当にTypescriptと相性が悪すぎる｡二度と使いたくはない",
  },
  {
    name: "supabase",
    icon: "logos:supabase-icon",
    description:
      "Firebaseの代替｡SQLが使えるのがいい｡Webサイトのモダン具合がすごい｡",
  },
  {
    name: "CloudFlare",
    icon: "logos:cloudflare-icon",
    description: "これから勉強します｡",
  },
  {
    name: "VSCode",
    icon: "vscode-icons:file-type-vscode",
    description:
      "エディターはこれ一択｡拡張機能が豊富で使いやすい｡(これ以外使ったこと無いだけ)",
  },
  {
    name: "python",
    icon: "logos:python",
    description: "全然できない",
  },
];

function Skill({ skill }: { skill: SkillData }): ReactElement {
  return (
    <Card key={skill.name} h={200} padding="md" radius="xl" shadow="xl" w={200}>
      <Flex align="center" direction="row" gap="5" mb={10}>
        <Icon height={30} icon={skill.icon} width={30} />
        <Text size="xl">{skill.name}</Text>
      </Flex>
      <Text size="sm">{skill.description}</Text>
    </Card>
  );
}

export default function Skills(): ReactElement {
  const colorScheme = useStore($colorScheme);
  return (
    <p.div
      bg={colorScheme === "light" ? "gray.400" : "gray.800"}
      fontFamily="Noto sans JP"
      py={20}
      w="100%"
    >
      <Center>
        <p.div w={800}>
          <Group
            align="center"
            justify="center"
            style={{ columnGap: 68 }}
            wrap="wrap"
          >
            {skillList.map((skill) => (
              <Skill key={skill.name} skill={skill} />
            ))}
          </Group>
        </p.div>
      </Center>
    </p.div>
  );
}
