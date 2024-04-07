import { type ReactElement } from "react";
import { styled as p } from "@panda/jsx";
import "./Layout.css";



function Layout({ children }: { children: ReactElement }): ReactElement {
  return (
    <p.div
      fontFamily="Noto Sans JP, sans-serif"
    >
      {children}
    </p.div>
  );
}
export default Layout;
