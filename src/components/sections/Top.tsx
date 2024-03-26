import { type ReactElement } from "react";
import { Image } from "@mantine/core";
import { getImage } from "../../utils";
import { styled as p } from "../../../styled-system/jsx";

export default function Top(): ReactElement {
  return (
    <p.div style={{ height: "calc(100vh - 50px)" }}>
      <Image
        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
        h="100%"
        src={getImage("picture")}
      />
    </p.div>
  );
}
