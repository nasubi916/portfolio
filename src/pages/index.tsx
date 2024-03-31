import { useReducer, type ReactElement } from "react";
import { Icon } from "@iconify/react";
import {
  Center,
  Flex,
  useComputedColorScheme,
} from "@mantine/core";
import { useOs, useWindowEvent } from "@mantine/hooks";
import { styled as p } from "../../styled-system/jsx";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Top from "../components/sections/Top";
import Profile from "../components/sections/Profile";
import Skills from "../components/sections/Skills";
import Experiences from "../components/sections/Experiences";
import Hobbies from "../components/sections/Hobbies";
import { $colorScheme } from "../stores/option";
// import Awards from "../components/sections/Awards";
// import Works from "../components/sections/Works";
// import Products from "../components/sections/Products";
// import Blogs from "../components/sections/Blogs";

export default function Home(): ReactElement {
  const [enterAnimation, toggleEnterAnimation] = useReducer(() => true, false);
  const os = useOs();
  const colorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  $colorScheme.set(colorScheme);

  useWindowEvent("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      toggleEnterAnimation();
    }
  });
  useWindowEvent("touchstart", (event) => {
    event.preventDefault();
    toggleEnterAnimation();
  });
  return (
    <>
      {!enterAnimation && (
        <Center>
          <p.div position="absolute" textAlign="center" top="50%" zIndex={10}>
            <Flex align="center" direction="row" gap={3}>
              <p.div
                animation="cursor .7s infinite alternate ,typing 1s steps(10)"
                borderRight="1px solid white"
                fontFamily="Noto Serif JP"
                fontSize={50}
                letterSpacing="5px"
                overflow="hidden"
                width="100%"
              >
                nasubi.dev
              </p.div>
              <Icon
                height={50}
                icon="material-symbols:keyboard-return"
                width={50}
              />
            </Flex>
            <p.div animation="fadein 3s">
              please{" "}
              <b>
                {os === "windows" ? "Enter" : ""}
                {os === "macos" ? "Return" : ""}
                {os === "linux" ? "Return" : ""}
                {os === "android" ? "Tap" : ""}
                {os === "ios" ? "Tap" : ""}
                {os === "undetermined" ? "Enter" : ""}
              </b>
            </p.div>
          </p.div>
        </Center>
      )}
      {enterAnimation && (
        <p.div>
          <Header />
          <Flex direction="column">
            <Top />
            <Profile />
            <Skills />
            <Experiences />
            <Hobbies />
            {/*
        <Awards />
        <Works />
        <Products />
        <Blogs />
      */}
          </Flex>
          <Footer />
        </p.div>
      )}
    </>
  );
}
