import { type ReactElement } from "react";
import { styled as p } from "@panda/jsx";
import Test from "../../../articles/test.md";

export default function Blogs(): ReactElement {
  return (
    <p.div mt={20}>
      <h1>Blogs</h1>
      {/* マークダウンにCSSを当てたい */}
      <Test />
    </p.div>
  );
}
