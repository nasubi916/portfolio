import { type ReactElement } from "react";
import { styled as p } from "@panda/jsx";
import "./Layout.css"
import Test from "../../../articles/uploaded/test.md";

/** @type {import('mdx/types.js').MDXComponents} */
const components = {
  em(properties: any) {
    return <i {...properties} />;
  },
};
export default function Blogs(): ReactElement {
  return (
    <p.div
      alignItems="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <h1>Blogs</h1>
      <p.div w="full">
        <div className="markdown-body">
          <Test components={components} />
        </div>
      </p.div>
    </p.div>
  );
}
