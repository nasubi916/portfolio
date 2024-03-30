import { type ReactElement, useState } from "react";
import { Icon } from "@iconify/react";
import { useStore } from "@nanostores/react";
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
    description: `Webアプリケーションを作るのが好きです｡
      最近はReact + Vite + TypeScriptで開発しています｡
      高校の頃はVueでコードを書いたので､Reactの仕様に苦戦している｡
      特に単方向バインディングとエコシステム辺りが違いすぎて勉強中｡`,
  },
  {
    name: "Read",
    description: `本好きが高じて本屋でバイトをはじめました｡
    愛書は中村文則の｢遮光｣です｡"恋人だったもの"をいつも持ち歩いている虚言癖のある男の話なのですが､
    こんなあらすじだけでは伝わらない良さが詰まっているのでぜひ読んでください｡なんなら私が貸します｡
    他にも伊藤計劃のユートピアな世界に馴染めない女の子達の壮大な自殺計画｢ハーモニー｣､
    チャック・パラニュークの独特の読み応えのある文章がクセになる｢ファイト・クラブ｣も面白いので布教計画を立案中...`,
  },
  {
    name: "Anime",
    description: `90's年代のアニメが好きです｡ARIAとか新世紀エヴァンゲリオンとかFLCLが好みド直球｡
    京アニやきらら作品も好きです｡というか､アニメぜんぶ好きです｡
    声優には詳しくない｡黒沢ともよさんと悠木碧さんしかわからない｡あと杉田さん｡`,
  },
  {
    name: "Movie",
    description: `デビッド・フィンチャー監督のFight ClubとかSevenなどのバイオレンス&サスペンスが好きです｡
    ノーラン監督のSF映画､TENETとかインターステラーもインセプションも全てが好きです｡ブレードランナーも勿論好き｡
    ディカプリオ様の素晴らしさはCatch Me If You Canかウルフ・オブ・ウォールストリートを観ればわかる｡
    でも､インターステラー観たあとにウルフ・オブ・ウォールストリート観ると､マシュー・マコノヒーの演じるキャラが真逆すぎて違和感を感じる｡
    90～00's年代のショーシャンクの空に､LEON､フォレスト・ガンプ､ユージュアル・サスペクツとかの今見ても面白い名作も好き｡
    面白い映画募集中｡`,
  },
  {
    name: "Game",
    description: `3DSを押し入れから発掘してとび森とルーンファクトリー4をやっています｡
      ノベルゲームも好きでGNOSIAもNEEDY GIRL OVERDOSEもダンガンロンパも面白かった｡
      他にもポーションクラフトやSlay the Spireのようなチルいゲームも好きです｡`,
  },
  {
    name: "Moh-jong",
    description: `麻雀が好きです｡雀魂ランクはもうそろそろ雀傑に上がりそうで上がらない｡
    最近､スジとタテを覚えたので､もう少し上達したいです｡
    麻雀はゲームではない｡麻雀はスポーツです｡
    実卓で打ってみたいけど､雀魂でしか打たないからルールを間違えそう｡`,
  },
  {
    name: "History",
    description: `ヨーロッパ史が大好き｡
      特にウェストファリア体制～第一次世界大戦に至るまでの経緯は何度勉強してもおもしろい｡
      推し国家はロシア帝国です｡
      ピョートル大帝の改革により､ロシア社会は一気に欧化した｡
      でもそれは表面的なものであり､ウィーンやパリの人々のマネをするだけで文化の下地となる習慣や価値観を受け入れることはなかった｡
      文化を仕入れたところで､それを受け入れる土壌がないと､それはただの模倣にすぎない｡
      ドイツ人であるエカテリーナ二世も日記でロシアについてこのように分析していた｡
      実際に､ロシア国内で流通する本の多くはフランス語かドイツ語で書かれていた｡
      こんな状況と民主主義思想の浸透が重なり､知識人は自分たちはヨーロッパ人なのかスラブ人なのかというアイデンティティの危機に直面していた｡
      それがロシア革命の背景にあると思う｡
      まあ､実際は単純に食料に困っただけだと思いますが｡`,
  },
  {
    name: "Write",
    description: `マークダウン記法で書けるobsidianを使って日記を書いています｡
    キャッチアップだけでなく､これからは外へ発信もしていきたい｡`,
  },
  {
    name: "Music",
    description: `SoundCloudで音楽を聴いています｡
    House Techno Electro Dubstep Kawaii future buss好きです｡
    ボカロも邦楽も洋楽も一通り聴いてます｡
    春のM3に興味があるけど一人じゃ行く気にならない｡行きたい人いないかな｡
    好きなアーティストはAiobahn fusq PSYQUI NekoHacker va1ue volta RYOQUCHA KOTONOHOUSE
    9W3R7Y PinkBamboo Connexio abysslnoiz TEMPLIME PIKASONIC RANGE ASUNDER TOKYOMACHINE｡
    `,
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
          <Spoiler
            hideLabel="オタクの長尺の語りウザいから消すボタン"
            maxHeight={100}
            showLabel="もっとみせる"
          >
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
