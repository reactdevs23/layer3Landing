import React from "react";
import { Heading, Text, Wrapper } from "../../../common";
import classes from "./BuildProject.module.css";
import { peerToPeer } from "../../../images";
import clsx from "clsx";
const BuildProject = () => {
  const data = [
    {
      id: 1,
      img: peerToPeer,
      title: "Wallet Setup and",
      subTitle: "Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      img: peerToPeer,
      title: "Transaction",
      subTitle: "Execution",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      img: peerToPeer,
      title: "Smart Contract",
      subTitle: "Deployment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 4,
      img: peerToPeer,
      title: "Interacting with",
      subTitle: "DApps",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  return (
    <Wrapper bg="#09090F">
      {" "}
      <div className={clsx("container", classes.container)}>
        {" "}
        <Heading xl7 textCenter className={classes.heading}>
          <span className={classes.light}> Build Your Dream </span> Project in
          Easy Way
        </Heading>
        <div className={classes.projects}>
          {data.map((el, i) => (
            <div
              key={i}
              className={clsx(
                classes.project,
                el.id === 1 && classes.project1,
                el.id === 2 && classes.project2,
                el.id === 3 && classes.project3,
                el.id === 4 && classes.project4
              )}
            >
              <div className={classes.header}>
                <Heading xl5 base0 className={classes.id}>
                  {el.id < 9 ? `0${el.id}` : el.id}
                </Heading>
                <img src={el.img} alt="#" className={classes.img} />
              </div>

              <div className={classes.infoContainer}>
                <div>
                  <Heading base0 xl3 className={classes.title}>
                    {el.title}
                  </Heading>
                  <Heading light base0 xl3 className={classes.subTitle}>
                    {el.subTitle}
                  </Heading>
                </div>
                <Text lg base0 className={classes.description}>
                  {el.description}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default BuildProject;
