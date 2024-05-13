import React from "react";
import classes from "./DetailsAndStatistics.module.css";
import { Heading, Text, Wrapper } from "../../../common";
import clsx from "clsx";
import { peerToPeer } from "../../../images";
import Button from "../../../common/Button/Button";
const DetailsAndStatistics = () => {
  const data = [
    {
      img: peerToPeer,
      label: "Two Line of Simple ",
      title: "Heading Text",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      learnMore: "",
    },
    {
      img: peerToPeer,
      label: "Two Line of Simple ",
      title: "Heading Text",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      learnMore: "",
    },
    {
      label: "Two Line of Simple ",
      title: "Heading Text Here Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      learnMore: "",
    },
  ];

  const statistics = [
    {
      label: "Projects",
      amount: 100,
    },
    {
      label: "Transactions",
      amount: 10000,
    },
    {
      label: "Community ",
      amount: 10000000,
    },
    {
      label: "Validators",
      amount: 10000000,
    },
    {
      label: "Accounts",
      amount: 10000000,
    },
    {
      label: "Contracts",
      amount: 10000000,
    },
  ];
  function formatNumber(num) {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(0) + "B";
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(0) + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K";
    }
    return num;
  }
  return (
    <Wrapper bg="#434AFF">
      <div className={clsx("container", classes.container)}>
        <div className={classes.infoWrapper}>
          {data.map((el, i) => (
            <div className={classes.infoContainer} key={i}>
              {el.img && <img src={el.img} alt="#" className={classes.img} />}
              <div>
                <Heading xl5 base0>
                  <span className={classes.light}>{el.label}</span> {el.title}
                </Heading>
              </div>
              <div className={classes.descriptionAndButton}>
                <Text lg base0>
                  {el.description}
                </Text>
                {/* you can pass either onClick or href */}
                <Button transparentBase0 href="#" className={classes.button}>
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className={classes.statistics}>
          <Heading textCenter base0 className={classes.statisticsHeading}>
            <span className={classes.light}>See the Statistics of</span>{" "}
            Brandname
          </Heading>

          <div className={classes.allStatistics}>
            {statistics.map((el, i) => (
              <div className={classes.box} key={i}>
                <Heading xl4 base950 textCenter>
                  {formatNumber(el.amount)}+
                </Heading>
                <Text lg base950 textCenter>
                  {el.label}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default DetailsAndStatistics;
