import React from "react";
import classes from "./WhyUs.module.css";
import { Heading, Text, Wrapper } from "../../../common";
import clsx from "clsx";
import { arrow, peerToPeer, whyUs } from "../../../images";

const WhyUs = () => {
  const data = [
    {
      id: 1,
      img: peerToPeer,
      subTitle: "Robust Security",
      title: "Measures",

      description:
        "Emphasize the security protocols implemented within our system. Discuss features such as encryption, multi-factor authentication, and regular security audits. Assure users that their data and assets are safe with us.",
    },
    {
      id: 1,
      img: peerToPeer,
      subTitle: "Robust Community",
      title: "and Support",

      description:
        "Showcase our active and engaged community. Highlight forums, chat groups, and social media channels where users can connect, share knowledge, and seek assistance. A strong community fosters trust and collaboration.",
    },
    {
      id: 1,
      img: peerToPeer,
      subTitle: "Scalability and",
      title: "Future-Proofing",

      description:
        "Explain how our platform is designed to scale seamlessly as user demands grow. Discuss our commitment to staying up-to-date with technological advancements and evolving industry standards. Users want a solution that can adapt to their changing needs.",
    },
    {
      id: 1,
      img: peerToPeer,
      subTitle: "Transparent Governance and ",
      title: "Decision-Making",

      description:
        "Describe our governance model. Whether it’s decentralized voting, transparent leadership, or community-driven decision-making, users appreciate knowing how we operate. Transparency builds credibility and encourages long-term partnerships.",
    },
  ];
  return (
    <Wrapper bg="#fff">
      <div className={clsx("container", classes.container)}>
        <div className={classes.leftSide}>
          <Heading xl6 base950 className={classes.heading}>
            <span className={classes.light}> Why You Should Use </span>
            Brandname
          </Heading>

          <div className={classes.imgContainer}>
            <img src={whyUs} alt="#" className={classes.whyUsImg} />
            <img src={arrow} alt="#" className={classes.arrowImg} />
          </div>
        </div>
        <div className={classes.facilities}>
          {data.map((el, i) => (
            <div key={i} className={clsx(classes.facility)}>
              <img src={el.img} alt="#" className={classes.img} />
              <div className={classes.infoContainer}>
                <div>
                  <Heading base950 light xl3 className={classes.title}>
                    {el.title}
                  </Heading>
                  <Heading base950 xl3 className={classes.subTitle}>
                    {el.subTitle}
                  </Heading>
                </div>
                <Text lg base950 className={classes.description}>
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

export default WhyUs;
