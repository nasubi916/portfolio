import { type ReactElement } from "react";
import { styled as p } from "@panda/jsx";
import Article from "@/components/Article";

export default function Blogs(): ReactElement {
  return (
    <p.div
      alignItems="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <h1>Blogs</h1>
        <Article />
    </p.div>
  );
}
