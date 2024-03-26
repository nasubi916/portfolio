import { type ReactElement, useState } from "react";
import { Icon } from "@iconify/react";
import { Text, Center, Flex, Image, em } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { getImage } from "../../utils";
import { $isMobile } from "../../stores/option";
import { styled as p } from "../../../styled-system/jsx";

export default function Profile(): ReactElement {
  $isMobile.set(useMediaQuery(`(max-width: ${em(750)})`) ?? false);
  const isMobile = $isMobile.value ?? false;
  const [is8bit, setIs8bit] = useState(false);

  return (
    <Center>
      <Flex
        align="center"
        direction={isMobile ? "column" : "row"}
        gap={20}
        justify="center"
        my={40}
      >
        <Image
          fallbackSrc="https://placehold.co/600x400?text=Placeholder"
          h={isMobile ? 200 : 200}
          onClick={() => {
            setIs8bit((prev) => !prev);
          }}
          radius="xl"
          src={is8bit ? getImage("nasubi-8bit") : getImage("nasubi")}
          w={isMobile ? 200 : 200}
        />
        <p.div
          fontSize={30}
          lineHeight={2.0}
          my={isMobile ? 0 : 10}
          textAlign="left"
        >
          <Flex align="center" direction="row" gap={10}>
            <Icon icon="twemoji:eggplant" />
            <Text inherit>
              なすび
              <Text ml={5} size="md" span>
                nasubi
              </Text>
            </Text>
          </Flex>
          <p.div fontSize={20} w={isMobile ? 350 : 500}>
            <Text inherit>
              2005年生まれのB1｡プログラミングと読書が好きです｡
              高校1年生の頃からコードをペチペチしてます｡
              フロントエンドを中心に開発していますが､他の分野にも挑戦してみたいです｡
              大学生の間に自分の作ったものをSNSでバズらせるのが目標です｡
              本好きが高じて本屋でバイトをはじめました｡
              愛書は中村文則の｢遮光｣です｡ 本名ではない｡
            </Text>
          </p.div>
        </p.div>
      </Flex>
    </Center>
  );
}
