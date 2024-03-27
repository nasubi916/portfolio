import { type ReactElement } from "react";
import { Flex } from "@mantine/core";
import Top from "../components/sections/Top";
import Profile from "../components/sections/Profile";
import Skills from "../components/sections/Skills";
import Experiences from "../components/sections/Experiences";
import Hobbies from "../components/sections/Hobbies";
// import Awards from "../components/sections/Awards";
// import Works from "../components/sections/Works";
// import Products from "../components/sections/Products";
// import Blogs from "../components/sections/Blogs";

export default function Home(): ReactElement {
  return (
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
  );
}
