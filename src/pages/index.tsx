import { type ReactElement } from "react";
import { Icon } from "@iconify/react";
import { Flex } from "@mantine/core";
import Top from "../components/sections/top";
import Profile from "../components/sections/Profile";
import Skills from "../components/sections/Skills";
import Awards from "../components/sections/Awards";
import Works from "../components/sections/Works";
import Products from "../components/sections/Products";
import Experiences from "../components/sections/Experiences";
import Hobbies from "../components/sections/Hobbies";
import Blogs from "../components/sections/Blogs";

export default function Home(): ReactElement {
  return (
    <>
      {/* <Icon icon="twemoji:eggplant" /> */}
      <Flex direction="column">
        {/* <Top /> */}
        <Profile />
        <Skills />
        {/*
        <Awards />
        <Works />
        <Products />
        <Experiences />
        <Hobbies />
        <Blogs /> */}
      </Flex>
    </>
  );
}
