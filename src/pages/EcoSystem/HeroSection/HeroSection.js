import React from "react";
import classes from "./HeroSection.module.css";

import clsx from "clsx";
import { Wrapper, Heading, Text } from "../../../common";
import Button from "../../../common/Button/Button";
import { apiIntegration, arrow } from "../../../images";

const HeroSection = () => {
  return (
    <Wrapper bg="#F6F7F9" className={classes.wrapper}>
      <div className={clsx("container", classes.container)}>
        <div className={classes.infoContainer}>
          <Heading xl6 base950 className={classes.heading}>
            <span className={classes.light}> Build Your </span>
            Blockchain
          </Heading>
          <Text base600 xl className={classes.info}>
            Taking a closer look at the apps and integrations available within
            the ecosystem of [Brand-name].
          </Text>{" "}
          <div className={classes.buttonContainer}>
            {/* you can pass  href , onClick or to  whatever you prefer */}
            <Button primaryDefault to="/start-building" noShadow>
              Start building
            </Button>
            <Button transparentBase950 onClick={() => {}} noShadow>
              Read the docs
            </Button>
          </div>
        </div>

        <img src={arrow} alt="#" className={classes.arrowImg} />

        <img src={apiIntegration} alt="#" className={classes.img} />
      </div>
    </Wrapper>
  );
};

export default HeroSection;
