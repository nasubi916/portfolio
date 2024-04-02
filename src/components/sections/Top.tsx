import { type ReactElement } from "react";
import { Image, em } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { styled as p } from "@panda/jsx";
import { $isMobile } from "../../stores/option";
import picture from "@/assets/picture.png";

export default function Top(): ReactElement {
  $isMobile.set(useMediaQuery(`(max-width: ${em(750)})`) ?? false);
  const isMobile = $isMobile.value ?? false;
  return (
    <p.div position="relative" style={{ height: "calc(100vh - 50px)" }}>
      <Image
        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
        h="100%"
        src={picture}
      />
      <p.div
        bottom={20}
        color="white"
        fontFamily="Noto serif JP"
        fontSize={isMobile ? 30 : 50}
        left={50}
        position="absolute"
        textAlign="center"
      >
        言葉はまだ行いじゃない
      </p.div>
    </p.div>
  );
}
