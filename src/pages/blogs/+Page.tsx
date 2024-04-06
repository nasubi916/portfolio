import { useEffect, useReducer, type ReactElement } from "react";
import { MDXProvider } from "@mdx-js/react";
import Test from "../../../articles/test.mdx";

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

      <Test components={components} />
    </div>
  );
}
