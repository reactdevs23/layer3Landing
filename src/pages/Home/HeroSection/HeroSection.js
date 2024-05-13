import React from "react";
import classes from "./HeroSection.module.css";
import clsx from "clsx";
import { Text } from "../../../common";
import Marquee from "react-fast-marquee";
import Button from "../../../common/Button/Button";
import {
  FaDiscord,
  FaGithub,
  FaTelegram,
  FaYoutube,
  FaReddit,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { bottomIcon, heroBg, middleIcon, topIcon } from "../../../images";

const HeroSection = () => {
  const items = ["DAO", "DeFi", "Gaming", "NFT", "Onramp", "Bridge"];
  const socialLinks = [
    {
      logo: <FaDiscord className={classes.socialIcon} />,
      name: "Discord",
    },
    {
      logo: <FaXTwitter className={classes.socialIcon} />,
      name: "Twitter",
    },
    {
      logo: <FaGithub className={classes.socialIcon} />,
      name: "GitHub",
    },
    {
      logo: <FaTelegram className={classes.socialIcon} />,
      name: "Telegram",
    },
    {
      logo: <FaYoutube className={classes.socialIcon} />,
      name: "YouTube",
    },
    {
      logo: <FaReddit className={classes.socialIcon} />,
      name: "Reddit",
    },
  ];
  return (
    <section className={classes.wrapper}>
      <div className={clsx("container", classes.container)}>
        <div className={classes.topPart}>
          <Text base0 xl2 textCenter className={classes.subHeading}>
            Welcome to future of Blockchain
          </Text>
          <h2 className={classes.heading}>
            Secure Decentralized Ecosystem to Build
          </h2>
          <div className={classes.itemsWrapper}>
            <Marquee autoFill={true}>
              <div className={classes.items}>
                {items.map((el, i) => (
                  <Text xl3 base800 key={i} className={classes.item}>
                    {el}
                  </Text>
                ))}
              </div>
            </Marquee>
          </div>
          <div className={classes.buttonAndInfo}>
            <Text xl base0 className={classes.info}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor ut labore et dolore magna aliqua.
            </Text>
            <div className={classes.buttonContainer}>
              {/* you can pass  href , onClick or to  whatever you prefer */}
              <Button base0 to="start-building">
                Start building
              </Button>
              <Button
                transparentBase0
                onClick={() => {}}
                className={classes.readDocsButton}
              >
                Read the docs
              </Button>
            </div>
          </div>{" "}
          <img src={heroBg} alt="#" className={classes.heroBg} />
          <img src={topIcon} alt="#" className={classes.topIcon} />
          <img src={middleIcon} alt="#" className={classes.middleIcon} />
          <img src={bottomIcon} alt="#" className={classes.bottomIcon} />
        </div>
        <div className={classes.socialInfoContainer}>
          <Text xl2 base0 textCenter className={classes.socialInfo}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor ut labore et dolore magna aliqua.
          </Text>{" "}
          <div className={classes.socialContainer}>
            {socialLinks.map((el, i) => (
              <a
                key={i}
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={classes.socialLink}
              >
                {" "}
                {el.logo}
                <Text xl2 base-950 bold>
                  <span className={classes.name}>{el.name}</span>
                </Text>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
