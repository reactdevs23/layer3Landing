import React from "react";
import Tokenomization from "./Tokenomization/Tokenomization";
import ProjectsOverview from "./ProjectsOverview/ProjectsOverview";
import DetailsAndStatistics from "./DetailsAndStatistics/DetailsAndStatistics";
import ExploreProducts from "./ExploreProducts/ExploreProducts";
import MoveNextGeneration from "../../components/MoveNextGeneration/MoveNextGeneration";

import HeroSection from "./HeroSection/HeroSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Tokenomization />
      <ProjectsOverview />
      <DetailsAndStatistics />
      <ExploreProducts />
      <MoveNextGeneration />
    </>
  );
};

export default Home;
