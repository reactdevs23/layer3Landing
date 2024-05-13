import React from "react";
import classes from "./Tokenomization.module.css";
import clsx from "clsx";
import { ExploreButton, Heading, Text, Wrapper } from "../../../common";
import {
  arrow,
  immutableLedger,
  mechanism,
  moreAboutUs,
  peerToPeer,
  smartContract,
} from "../../../images";

const Tokenomization = () => {
  const data = [
    {
      id: 1,
      title: "Immutable",
      description: "Ledger",
      img: immutableLedger,
    },

    {
      id: 2,
      title: "Consensus",
      description: "Mechanisms",
      img: mechanism,
    },
    {
      id: 3,
      title: "Peer-to-Peer",
      description: "Network",
      img: peerToPeer,
    },
    {
      id: 4,
      title: "",
      description: "Want to know more about us?",
      img: moreAboutUs,
    },
  ];
  return (
    <Wrapper bg="#09090F">
      <div className={clsx("container", classes.container)}>
        <div className={classes.topPart}>
          <div className={classes.headingContainer}>
            <Heading xl7 className={classes.heading}>
              <span className={classes.light}> Tokenization and </span> Smart
              Contracts
            </Heading>
            <div className={classes.facilities}>
              <Text base500 xl2 className={classes.facility}>
                Ethereum L2
              </Text>{" "}
              <Text base500 xl2p xl2 className={clsx(classes.facility)}>
                Small Fees
              </Text>
              <Text base500 xl2 className={classes.facility}>
                Open Source
              </Text>
            </div>
            <img src={arrow} alt="#" className={classes.arrow2} />
          </div>
          <img src={arrow} alt="#" className={classes.arrow} />
          <img src={smartContract} alt="#" className={classes.img} />
        </div>

        <ExploreButton
          className={classes.button}
          arrowBg="#FFD250"
          arrowColor="#09090F"
          /* you can pass onClick or href  */
          //   href="#"
          // onClick={()=>{}}
        >
          Explore Ecosystem
        </ExploreButton>

        <div className={classes.bottomPart}>
          <Text base400 xl2 textCenter>
            Advanced Decentralized{" "}
            <span className={classes.highlight}>Blockchain Solution</span>
          </Text>
          <div className={classes.solutions}>
            {data.map((el, i) => (
              <div
                className={clsx(
                  classes.solution,
                  el.id === 1 && classes.solution1,
                  el.id === 2 && classes.solution2,
                  el.id === 3 && classes.solution3,
                  el.id === 4 && classes.solution4
                )}
                key={i}
              >
                {" "}
                <img src={el.img} alt="#" className={classes.solutionImg} />
                <div className={classes.infoContainer}>
                  {el.title && (
                    <Text xl3 className={classes.title}>
                      {el.title}
                      <span className={classes.bold}> {el.description}</span>
                    </Text>
                  )}
                  {/* <Text bold xl3 className={classes.description}></Text> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Tokenomization;
