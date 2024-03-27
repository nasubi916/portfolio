import { type ReactElement } from "react";
import { Image, em } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { getImage } from "../../utils";
import { $isMobile } from "../../stores/option";
import { styled as p } from "../../../styled-system/jsx";

export default function Top(): ReactElement {
  $isMobile.set(useMediaQuery(`(max-width: ${em(750)})`) ?? false);
  const isMobile = $isMobile.value ?? false;
  return (
    <p.div position="relative" style={{ height: "calc(100vh - 50px)" }}>
      <Image
        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
        h="100%"
        src={getImage("picture")}
      />
      <p.div
        bottom={20}
        color="white"
        fontFamily="Noto serif JP"
        fontSize={isMobile ? 30 : 80}
        left={50}
        position="absolute"
        textAlign="center"
      >
        言葉はまだ行いじゃない
        {/*
        他人を蹴落とし合って低め合うのがインターネット
        成し遂げたければ､命ではなく生涯を
        思ったことをすぐ口に出すのは美徳ではない
         */}
      </p.div>
    </p.div>
  );
}
