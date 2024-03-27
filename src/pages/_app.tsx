import { type ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { MantineProvider, createTheme } from "@mantine/core";
import "../global.css";
import "@mantine/core/styles.css";
import '@mantine/charts/styles.css';
import "@fontsource/noto-serif-jp";
import "@fontsource-variable/noto-sans-jp";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
  fontFamily: "Noto Serif JP,sans-serif",
});

export default function RootLayout(): ReactElement {
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <Header />
      <Outlet />
      <Footer />
    </MantineProvider>
  );
}
