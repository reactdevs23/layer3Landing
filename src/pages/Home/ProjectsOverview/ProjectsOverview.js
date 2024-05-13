import React, { useState } from "react";
import classes from "./ProjectsOverview.module.css";
import { ExploreButton, Heading, Text, Wrapper } from "../../../common";
import clsx from "clsx";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { add3, overlay, overview } from "../../../images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectsOverview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderData = [
    {
      img: add3,
      title: "ADD3",
      link: "www.add3.io",
      description:
        "EVM smart contract creation and management for web3 projects - Use Add3 to deploy customizable & compliant web3 smart contract products, dapp & analytics in minutes. Code or no-code options available!",
      button: "",
    },
    {
      img: add3,
      title: "ADD3",
      link: "www.add3.io",
      description:
        "EVM smart contract creation and management for web3 projects - Use Add3 to deploy customizable & compliant web3 smart contract products, dapp & analytics in minutes. Code or no-code options available!",
      button: "",
    },
    {
      img: add3,
      title: "ADD3",
      link: "www.add3.io",
      description:
        "EVM smart contract creation and management for web3 projects - Use Add3 to deploy customizable & compliant web3 smart contract products, dapp & analytics in minutes. Code or no-code options available!",
      button: "",
    },
    {
      img: add3,
      title: "ADD3",
      link: "www.add3.io",
      description:
        "EVM smart contract creation and management for web3 projects - Use Add3 to deploy customizable & compliant web3 smart contract products, dapp & analytics in minutes. Code or no-code options available!",
      button: "",
    },
    {
      img: add3,
      title: "ADD3",
      link: "www.add3.io",
      description:
        "EVM smart contract creation and management for web3 projects - Use Add3 to deploy customizable & compliant web3 smart contract products, dapp & analytics in minutes. Code or no-code options available!",
      button: "",
    },
    {
      img: add3,
      title: "ADD3",
      link: "www.add3.io",
      description:
        "EVM smart contract creation and management for web3 projects - Use Add3 to deploy customizable & compliant web3 smart contract products, dapp & analytics in minutes. Code or no-code options available!",
      button: "",
    },
  ];
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.3,
    arrows: true,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow currentSlide={currentSlide} />,
    nextArrow: (
      <CustomNextArrow
        currentSlide={currentSlide}
        slideCount={sliderData.length}
      />
    ),
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3.8,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3.2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2.4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1.2,
        },
      },
    ],
  };

  return (
    <Wrapper bg="#F6F7F9">
      <div className={clsx(classes.container, "container")}>
        <div className={classes.header}>
          <div className={classes.headingContainer}>
            <img src={overview} alt="#" className={classes.sideImg} />
            <div className={classes.infoContainer}>
              <div className={classes.headingAndTitle}>
                <Text xl3 primaryDefault>
                  Overview of
                </Text>
                <Heading xl7 base950 className={classes.heading}>
                  <span className={classes.light}> Projects in</span> Brandname
                </Heading>
              </div>
              <Text className={classes.title} xl3>
                Ecosystem
              </Text>
            </div>
          </div>
          <div className={classes.noOfSuccesfullProject}>
            <Heading xl5 base0>
              100+
            </Heading>
            <Text xl base0 className={classes.text}>
              Project Successfully Integrated
            </Text>
            <img src={overlay} alt="#" className={classes.overlay} />
          </div>
        </div>
        <div className={classes.projects}>
          <Slider {...settings}>
            {sliderData.map((el, i) => (
              <div className={classes.projectWrapper}>
                <div className={classes.project} key={i}>
                  <img src={el.img} className={classes.projectImg} alt="#" />
                  <div className={classes.linkAndTitle}>
                    <Heading xl3 base950 semiBold>
                      {el.title}
                    </Heading>
                    <a
                      href={el.link}
                      className={classes.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {el.link}
                    </a>
                  </div>
                  <div className={classes.line}></div>
                  <Text base600 lg>
                    {el.description}
                  </Text>
                  <button className={classes.button}>DEFI</button>
                </div>
              </div>
            ))}
          </Slider>{" "}
          <ExploreButton
            className={classes.exploreButton}
            arrowBg="#434AFF"
            arrowColor="#fff"
            /* you can pass onClick or href  */
            //   href="#"
            // onClick={()=>{}}
          >
            Explore Ecosystem
          </ExploreButton>
        </div>{" "}
      </div>
    </Wrapper>
  );
};

export default ProjectsOverview;
const CustomPrevArrow = ({ currentSlide, slideCount, onClick }) => {
  const isActive = currentSlide !== 0; // Check if current slide is not the first slide
  return (
    <button
      onClick={onClick}
      className={clsx(classes.previousButton, isActive && classes.activeButton)}
    >
      <FaArrowRight className={classes.arrow} />
    </button>
  );
};

const CustomNextArrow = ({ currentSlide, slideCount, onClick }) => {
  const isActive = currentSlide < slideCount - 1; // Check if current slide is not the last slide

  return (
    <button
      onClick={onClick}
      className={clsx(classes.nextButton, isActive && classes.activeButton)}
    >
      <FaArrowLeft className={classes.arrow} />
    </button>
  );
};
