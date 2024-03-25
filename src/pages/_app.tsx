import { type ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { MantineProvider, createTheme } from "@mantine/core";
import "@fontsource/roboto";
import "@mantine/core/styles.css";
import "../global.css";
import Header from "../components/Header";

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
  primaryColor: "purple",
  primaryShade: 6,
  fontFamily: "'roboto', sans-serif",
});

export default function RootLayout(): ReactElement {
  return (
      <MantineProvider defaultColorScheme="dark" theme={theme}>
        <Header />
        <Outlet />
      </MantineProvider>
  );
}
