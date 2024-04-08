import { type ReactElement } from "react";
import { styled as p } from "@panda/jsx";
import "./Layout.css";
import Test from "../../blogs/articles/uploaded/2.md";

/** @type {import('mdx/types.js').MDXComponents} */
const components = {
  em(properties: any) {
    return <i {...properties} />;
  },
};
export default function Article(): ReactElement {
  return (
    <p.div w="full">
      <div className="markdown-body">
        <Test components={components} />
      </div>
    </p.div>
  );
}
