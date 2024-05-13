import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import BuildProject from "./BuildProject/BuildProject";
import WhyUs from "./WhyUs/WhyUs";
import MoveNextGeneration from "../../components/MoveNextGeneration/MoveNextGeneration";

const StartBuilding = () => {
  return (
    <>
      <HeroSection />
      <BuildProject />
      <WhyUs />
      <MoveNextGeneration />
    </>
  );
};

export default StartBuilding;
