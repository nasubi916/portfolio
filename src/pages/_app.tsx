import { type ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { MantineProvider, createTheme } from "@mantine/core";
import "@fontsource/roboto";
import "@mantine/core/styles.css";
import "../global.css";

const theme = createTheme({
  colors: {
    purple: [
      "#faf5ff",
      "#f3e8ff",
      "#e9d5ff",
      "#d8b4fe",
      "#c084fc",
      "#a855f7",
      "#9333ea",
      "#7e22ce",
      "#6b21a8",
      "#581c87",
    ],
  },
  primaryColor: "purple",
  primaryShade: 6,
  fontFamily: "'roboto', sans-serif",
});

export default function RootLayout(): ReactElement {
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      Header
      <Outlet />
    </MantineProvider>
  );
}
