import { useEffect, useReducer, type ReactElement } from "react";
import { Icon } from "@iconify/react";
import { Center, Flex, useComputedColorScheme } from "@mantine/core";
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
  const [isEndAnimation, toggleEndAnimation] = useReducer(() => true, false);
  const os = useOs();
  const colorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  $colorScheme.set(colorScheme);

  function scrollHandler(event: Event): void {
    event.preventDefault();
  }
  useEffect(() => {
    if (!isEndAnimation) {
      document.addEventListener("touchmove", scrollHandler, { passive: false });
      document.addEventListener("scroll", scrollHandler, { passive: false });
      document.addEventListener("wheel", scrollHandler, { passive: false });
    }
    return () => {
      document.removeEventListener("touchmove", scrollHandler);
      document.removeEventListener("scroll", scrollHandler);
      document.removeEventListener("wheel", scrollHandler);
    };
  }, [isEndAnimation]);

  function handleEvent(event: Event): void {
    event.preventDefault();
    toggleEnterAnimation();
    setTimeout(() => {
      toggleEndAnimation();
    }, 1000);
  }

  useWindowEvent("keydown", (event) => {
    if (event.key === "Enter") handleEvent(event);
  });
  useWindowEvent("touchstart", (event) => {
    handleEvent(event);
  });

  return (
    <>
      <p.div
        animation={enterAnimation ? "fadeout 1s" : ""}
        animationFillMode="forwards"
        background="gray.800"
        height="100vh"
        overflow="hidden"
        width="100vw"
        zIndex={10}
      >
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
      </p.div>
      <p.div position="absolute" top={0} zIndex={isEndAnimation ? "0" : "-1"}>
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
    </>
  );
}
