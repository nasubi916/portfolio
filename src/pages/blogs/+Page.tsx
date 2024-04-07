import { type ReactElement } from "react";
import Test from "../../../articles/uploaded/test.mdx"

/** @type {import('mdx/types.js').MDXComponents} */
const components = {
  em(properties: any) {
    return <i {...properties} />;
  },
};
export default function Blogs(): ReactElement {
  return (
    <div>
      <h1>Blogs</h1>
      <div className="markdown-body">
        <Test components={components} />
      </div>
    </div>
  );
}
