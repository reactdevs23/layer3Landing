import React from "react";
import classes from "./MoveNextGeneration.module.css";
import { Heading, Wrapper } from "../../common";
import clsx from "clsx";
import Button from "../../common/Button/Button";

const MoveNextGeneration = () => {
  return (
    <Wrapper>
      <div className={clsx("container", classes.container)}>
        <Heading textCenter xl6 base950>
          <span className={classes.light}> Let's Move the Next</span>{" "}
          <br className={classes.br} /> Generation World.
        </Heading>

        <div className={classes.buttonContainer}>
          {/* you can pass  href , onClick or to  whatever you prefer */}
          <Button primaryDefault to="start-building" noShadow>
            Start building
          </Button>
          <Button transparentBase950 onClick={() => {}} noShadow>
            Read the docs
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default MoveNextGeneration;
