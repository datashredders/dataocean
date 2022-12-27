import React from "react";
import HeroSection from "../HeroSection";
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour } from "./Data";
import Pricing from "../Pricing";
import Menubar from "../Menubar/Menubar";

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
    </>
  );
}

export default Home;
