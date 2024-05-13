import React from "react";
import classes from "./ExploreProducts.module.css";
import { ExploreButton, Heading, Text, Wrapper } from "../../../common";
import clsx from "clsx";
import { arrow, blockChain, peerToPeer } from "../../../images";
import { FaArrowRight } from "react-icons/fa";
const ExploreProducts = () => {
  const products = [
    {
      img: peerToPeer,
      label: "Simple Products ",
      title: " Title Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: peerToPeer,
      label: "Simple Products ",
      title: " Title Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: peerToPeer,
      label: "Simple Products ",
      title: " Title Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: peerToPeer,
      label: "Simple Products ",
      title: " Title Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <Wrapper bg="#09090F">
      <div className={clsx("container", classes.container)}>
        <div className={classes.topPart}>
          <div className={classes.headingContainer}>
            <Heading xl7 className={classes.heading}>
              <span className={classes.light}> Let’s Explore </span> Our
              Products
            </Heading>
            <ExploreButton
              className={classes.button}
              arrowBg="#FFD250"
              arrowColor="#09090F"
              /* you can pass onClick or href  */
              //   href="#"
              // onClick={()=>{}}
            >
              Start Building
            </ExploreButton>
            <img src={arrow} alt="#" className={classes.arrow2} />
          </div>
          <img src={arrow} alt="#" className={classes.arrow} />
          <div className={classes.makeBlockchain}>
            <div>
              <Text xl base950 className={classes.bold}>
                Make Blockchain{" "}
              </Text>
              <Text xl base950>
                Accessible to Everyone
              </Text>
            </div>
            <img src={blockChain} alt="#" className={classes.img} />
          </div>
        </div>
        <div className={classes.products}>
          <div className={classes.productsWrapper}>
            {products.map((el, i) => (
              <div className={classes.product} key={i}>
                <img src={el.img} alt="#" className={classes.productImg} />
                <div className={classes.titleAndDescription}>
                  <div>
                    {" "}
                    <Heading light xl2 base0>
                      {el.label}
                    </Heading>
                    <Heading xl2 base0>
                      {el.title}
                    </Heading>
                  </div>
                  <Text sm base0>
                    {el.description}
                  </Text>{" "}
                </div>
                <a
                  href="#/"
                  target="_blank"
                  rel="noreferrer"
                  className={classes.more}
                >
                  <FaArrowRight className={classes.arrowIcon} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default ExploreProducts;
