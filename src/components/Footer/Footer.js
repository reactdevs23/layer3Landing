import React from "react";
import classes from "./Footer.module.css";
import { Heading, Text, Wrapper } from "../../common";
import clsx from "clsx";

import {
  FaDiscord,
  FaGithub,
  FaTelegram,
  FaYoutube,
  FaReddit,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
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
    <Wrapper bg="#434AFF" className={classes.wrapper}>
      <div className={clsx("container", classes.container)}>
        <div className={classes.leftSide}>
          <h2 className={classes.heading}>Build Your Blockchain</h2>
          <Text lg base0 className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </div>

        <div className={classes.linksContainer}>
          <div className={classes.links}>
            <div className={classes.headingAndLinks}>
              <Heading xl2 base0 className={classes.linkHeading}>
                Developers
              </Heading>
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={classes.link}
              >
                Start Building
              </a>
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={classes.link}
              >
                Ecosystem
              </a>{" "}
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={classes.link}
              >
                Docs
              </a>
            </div>
            <div className={classes.headingAndLinks}>
              <Heading base0 xl2>
                Resources
              </Heading>
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={classes.link}
              >
                Blog
              </a>
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={classes.link}
              >
                Academy
              </a>{" "}
            </div>{" "}
            <div className={classes.headingAndLinks}>
              <Heading xl2 base0 className={classes.linkHeading}>
                Products
              </Heading>
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={classes.link}
              >
                Product Title
              </a>
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={classes.link}
              >
                Product Title
              </a>{" "}
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={classes.link}
              >
                Product Title
              </a>
            </div>
            <div className={classes.socialContainer}>
              {socialLinks.map((el, i) => (
                <a
                  key={i}
                  href="#/"
                  target="_blank"
                  rel="noreferrer"
                  className={classes.socialLink}
                >
                  {el.logo}
                  <span className={classes.name}>{el.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={clsx("container", classes.copyRightContainer)}>
        <Text base base0>
          © 2024. All rights reserved{" "}
          <a href="#/" target="_blank" className={classes.bold}>
            Brandname.com
          </a>
        </Text>
        <div className={classes.privacyAndTerms}>
          <a href="#/" target="_blank" className={classes.link}>
            Privacy Policy
          </a>{" "}
          <a href="#/" target="_blank" className={classes.link}>
            Terms of Use
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
