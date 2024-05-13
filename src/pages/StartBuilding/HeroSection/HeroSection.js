import React from "react";
import classes from "./HeroSection.module.css";
import { Text, Wrapper } from "../../../common";
import clsx from "clsx";
import { arrow, buildEvm, moreAboutUs, overview } from "../../../images";
import { NavLink } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";

const HeroSection = () => {
  const navItems = [
    {
      item: "Home",
      to: "/",
    },
    {
      item: "Developers",
      to: "/developers",
    },
    {
      item: "Start Building",
      to: "/start-building",
    },
  ];
  return (
    <Wrapper className={classes.wrapper}>
      <div className={clsx("container", classes.container)}>
        <div className={classes.navItemsAndImg}>
          <div className={classes.navItems}>
            {navItems.map((el, i) => (
              <NavLink
                to={el.to}
                key={i}
                className={({ isActive }) =>
                  isActive
                    ? clsx(classes.navItem, classes.activeNavItem)
                    : classes.navItem
                }
              >
                {el.item}
              </NavLink>
            ))}
          </div>
          <img src={overview} alt="#" className={classes.overviewImg} />
        </div>
        <div className={classes.rightSide}>
          <div className={classes.headingContainer}>
            <h2 className={classes.heading}>
              Build EVM-based Blockchain{" "}
              <span className={classes.subHeading}>in Brandname</span>
            </h2>
            <img src={arrow} alt="#" className={classes.arrowImg} />
            <img src={buildEvm} alt="#" className={classes.buildEvm} />
          </div>
          <div className={classes.infoContainer}>
            <Text lg base0 className={classes.text}>
              Lorem ipsum dolor sit amet, dipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim minim veniam
            </Text>
            <div className={classes.buttonContainer}>
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={classes.box}
              >
                <Text xl base950>
                  Read the docs
                </Text>
                <p className={classes.arrowContainer}>
                  <RiArrowRightLine className={classes.arrow} />
                </p>
              </a>{" "}
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={clsx(classes.box, classes.ecosystemInfoContainer)}
              >
                <img src={moreAboutUs} alt="#" className={classes.logo} />
                <div className={classes.ecosystemInfo}>
                  <Text xl base950>
                    Explore the Ecosystem
                  </Text>
                  <p className={classes.arrowContainer}>
                    <RiArrowRightLine className={classes.arrow} />
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroSection;
