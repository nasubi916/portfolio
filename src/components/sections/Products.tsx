import { type ReactElement } from "react";
import { Icon } from "@iconify/react";
import { useStore } from "@nanostores/react";
import {
  Text,
  Center,
  Group,
  Flex,
  em,
  Card,
  Spoiler,
  Button,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { styled as p } from "@panda/jsx";
import { $colorScheme, $isMobile } from "../../stores/option";

import fookeys from "@/assets/fookeys.mp4";
import m3 from "@/assets/my-monthly-mix.mp4";

type ProductsData = {
  name: string;
  image: string;
  url?: string;
  github?: string;
  youtube?: string;
  preview?: string;
  description: string;
};

const products: ProductsData[] = [
  {
    name: "fookeys",
    image: "https://fookeys.com/images/logo.png",
    url: "https://fookeys.vercel.app/",
    youtube: "https://youtu.be/-RsJv_yJDFc",
    preview: "fookeys",
    github: "https://github.com/nasubi916/fookeys",
    description:
      `fookeysはブラウザで動作する1対1の対戦型カードゲームです｡
      Vue + firebaseで作成しました｡`,
  },
  {
    name: "my-monthly-mix",
    image: "https://my-monthly-mix.vercel.app/logo.png",
    preview: "m3",
    github: "https://github.com/wappon28dev/my-monthly-mix", // ?
    description: `my-monthly-mixは｡はサークル内ハッカソンにて友人と二人で､約2週間の短期開発を行いました｡
      私はフロントエンドを担当し､vite + Reactで制作しました｡
      my-monthly-mixは今月聴いた曲で共有したい3曲を選び､投稿するサービスです｡
      YouTubeとSpotifyに対応しています｡`,
  },
];

function Product({
  name,
  icon,
  description,
  youtube,
  url,
}: {
  name: string;
  icon: string;
  description: string;
  url: string;
  youtube?: string;
}): ReactElement {
  $isMobile.set(useMediaQuery(`(max-width: ${em(750)})`) ?? false);
  const isMobile = $isMobile.value ?? false;
  return (
    <Card h="auto" radius="lg" shadow="xl" w={isMobile ? 370 : 400}>
      <Flex align="center" direction="column" gap={10}>
        <Flex align="center" direction="row" gap={5}>
          <Icon height={30} icon={icon} width={30} />
          <Text inherit>{name}</Text>
        </Flex>
        <video controls src={name === "fookeys" ? fookeys : m3} />
        <p.div fontSize={16}>
          <Spoiler hideLabel="" maxHeight={200} showLabel="もっとみせる">
            <Text inherit>{description}</Text>
          </Spoiler>
        </p.div>
        <p.div w={isMobile ? 300 : 350}>
          {url !== "" && (
            <Button
              component="a"
              href={url}
              size="xs"
              target="_blank"
              variant="outline"
            >
              Link : {url}
            </Button>
          )}
          {youtube !== "" && (
            <div>
              <Button
                component="a"
                href={youtube}
                size="xs"
                target="_blank"
                variant="outline"
              >
                YouTube : {youtube}
              </Button>
            </div>
          )}
        </p.div>
      </Flex>
    </Card>
  );
}

export default function Products(): ReactElement {
  $isMobile.set(useMediaQuery(`(max-width: ${em(750)})`) ?? false);
  const colorScheme = useStore($colorScheme);

  return (
    <p.div
      bg={colorScheme === "light" ? "gray.400" : "gray.800"}
      fontFamily="sans"
      fontSize={30}
      pb={20}
      w="100%"
    >
      <Center my={20}>
        <Text ff="Noto serif jp" inherit mx={20}>
          Products
        </Text>
      </Center>
      <Center>
        <Group align="start" gap={40} justify="center" m={3} wrap="wrap">
          {products.map((product) => (
            <Product
              key={product.name}
              description={product.description}
              icon={product.image}
              name={product.name}
              url={product.url ?? ""}
              youtube={product.youtube ?? ""}
            />
          ))}
        </Group>
      </Center>
    </p.div>
  );
}
