import { type ReactElement, useState } from "react";
import { Icon } from "@iconify/react";
import { Text, Center, Flex, Image, em, Transition } from "@mantine/core";
import { useMediaQuery, useHover } from "@mantine/hooks";
import { styled as p } from "@panda/jsx";
import { $isMobile } from "../../stores/option";
import nasubi from "@/assets/nasubi.png";
import nasubi8bit from "@/assets/nasubi-8bit.png";

export default function Profile(): ReactElement {
  $isMobile.set(useMediaQuery(`(max-width: ${em(750)})`) ?? false);
  const isMobile = $isMobile.value ?? false;
  const { hovered, ref } = useHover();
  const [is8bit, setIs8bit] = useState(false);

  return (
    <p.div fontSize={30} mb={20}>
      <Flex direction="column">
        <Center>
          <Text inherit my={20}>
            Profile
          </Text>
        </Center>
        <Flex
          align="center"
          direction={isMobile ? "column" : "row"}
          gap={20}
          justify="center"
        >
          <p.div position="relative">
            <Image
              h={isMobile ? 200 : 200}
              onClick={() => {
                setIs8bit((prev) => !prev);
              }}
              radius="xl"
              src={nasubi}
              w={isMobile ? 200 : 200}
            />
            <p.div
              left={0}
              position="absolute"
              top={0}
              zIndex={is8bit ? 1 : -1}
            >
              <Image
                h={isMobile ? 200 : 200}
                onClick={() => {
                  setIs8bit((prev) => !prev);
                }}
                radius="xl"
                src={nasubi8bit}
                w={isMobile ? 200 : 200}
              />
            </p.div>
          </p.div>
          <p.div fontSize={30} lineHeight={2.0} textAlign="left">
            <Flex align="center" direction="row" gap={10}>
              <p.div ref={ref} position="relative">
                <Icon icon="twemoji:eggplant" />
                <p.div left={-2} position="absolute" top={-30}>
                  <Transition
                    duration={400}
                    mounted={hovered}
                    timingFunction="ease"
                    transition="pop"
                  >
                    {(styles) => (
                      <Text style={styles} w={80}>
                        \ｺﾝﾆﾁﾊ/
                      </Text>
                    )}
                  </Transition>
                </p.div>
              </p.div>
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
                愛書は中村文則の｢遮光｣です｡苦手なのは車校です｡ 本名ではない｡
              </Text>
            </p.div>
          </p.div>
        </Flex>
      </Flex>
    </p.div>
  );
}
