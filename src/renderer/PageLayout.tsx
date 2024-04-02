import { Outlet } from "react-router-dom";
import { MantineProvider, createTheme } from "@mantine/core";
import { type ReactElement, StrictMode } from "react";
import { styled as p } from "@panda/jsx";
import "@/global.css";
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
import "@fontsource/noto-serif-jp";
import "@fontsource-variable/noto-sans-jp";

const theme = createTheme({
  colors: {
    purple: [
      "#f6eeff",
      "#e7daf7",
      "#cab1ea",
      "#ad86dd",
      "#9562d2",
      "#854bcb",
      "#7d3ec9",
      "#6b31b2",
      "#5f2aa0",
      "#52228d",
    ],
  },
  white: "#e7e7e7",
  primaryColor: "purple",
  primaryShade: 6,
  fontFamily: "Noto Serif JP, sans-serif",
});

export function PageLayout({
  children,
}: {
  children: ReactElement;
}): ReactElement {
  return (
    <StrictMode>
      <p.div overflow="hidden">
        <MantineProvider defaultColorScheme="dark" theme={theme}>
          <Outlet />
          {children}
        </MantineProvider>
      </p.div>
    </StrictMode>
  );
}
