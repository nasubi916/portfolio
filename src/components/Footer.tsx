import { type ReactElement } from "react";
import {
  Text,
  Divider,
} from "@mantine/core";
import { styled as p } from "../../styled-system/jsx";

export default function Footer(): ReactElement {
  return (
    <p.div h={50}>
      <Divider size="sm" />
      <Text>なんか適当なコピーライトとContact</Text>
    </p.div>
  );
}
