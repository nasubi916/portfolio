import { type ReactElement } from "react";
import { Text, Center } from "@mantine/core";
import { styled as p } from "../../../styled-system/jsx";

export default function Profile(): ReactElement {
  return (
    <Center>
      <p.div fontSize={30} lineHeight={2.0} my={10} textAlign="left">
        <Text inherit>
          なすび
          <Text ml={5} size="md" span>
            nasubi
          </Text>
        </Text>
        <p.div fontSize={20} mx={10} w={700}>
          <Text inherit>
            2005年生まれのB1｡プログラミングと読書が好きです｡
            高校1年生からコードをペチペチしてます｡
            フロントエンドを中心に開発していますが､他の分野にも挑戦してみたいです｡
            大学生の間に自分の作ったものをSNSでバズらせるのが目標です｡
            本好きが高じて本屋でバイトをはじめました｡
            愛書は中村文則の｢遮光｣です｡ 本名ではない｡
          </Text>
        </p.div>
      </p.div>
    </Center>
  );
}
