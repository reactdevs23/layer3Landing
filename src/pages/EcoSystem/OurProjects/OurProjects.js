import React, { useState } from "react";
import classes from "./OurProjects.module.css";
import { IoSearchOutline } from "react-icons/io5";

import clsx from "clsx";
import { Heading, Text, Wrapper } from "../../../common";
import { add3 } from "../../../images";
import Button from "../../../common/Button/Button";

const OurProjects = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchValue, setSearchValue] = useState("");

  const itemsPerPage = 9;
  const [visibleProjectsCount, setVisibleProjectsCount] =
    useState(itemsPerPage);
  const tabs = [
    "ALL",
    "BRIDGE",
    "DAO",
    "DEFI",
    "GAMING",
    "INFRA",
    "NFT",
    "ONRAMP",
    "SECURITY",
    "SOCIAL",
    "WALLET",
    "X-CHAIN",
  ];
  const data = [
    {
      category: "Bridge",
      img: add3,
      title: "ADD3",
      link: "www.add3.io",
      description:
        "EVM smart contract creation and management for web3 projects - Use Add3 to deploy customizable & compliant web3 smart contract products, dapp & analytics in minutes. Code or no-code options available!",
      button: "",
    },
    {
      category: "Bridge",
      img: add3,
      title: "ADD3",
      link: "www.add3.io",
      description:
        "EVM smart contract creation and management for web3 projects - Use Add3 to deploy customizable & compliant web3 smart contract products, dapp & analytics in minutes. Code or no-code options available!",
      button: "",
    },
    {
      category: "DEFI",
      img: add3,
      title: "ADD3",
      link: "www.add3.io",
      description:
        "EVM smart contract creation and management for web3 projects - Use Add3 to deploy customizable & compliant web3 smart contract products, dapp & analytics in minutes. Code or no-code options available!",
      button: "",
    },
    {
      category: "WALLET",
      img: add3,
      title: "ADD3",
      link: "www.add3.io",
      description:
        "EVM smart contract creation and management for web3 projects - Use Add3 to deploy customizable & compliant web3 smart contract products, dapp & analytics in minutes. Code or no-code options available!",
      button: "",
    },
    {
      category: "Bridge",
      img: add3,
      title: "ADD3",
      link: "www.add3.io",
      description:
        "EVM smart contract creation and management for web3 projects - Use Add3 to deploy customizable & compliant web3 smart contract products, dapp & analytics in minutes. Code or no-code options available!",
      button: "",
    },
    {
      category: "DEFI",
      img: add3,
      title: "ADD3",
      link: "www.add3.io",
      description:
        "EVM smart contract creation and management for web3 projects - Use Add3 to deploy customizable & compliant web3 smart contract products, dapp & analytics in minutes. Code or no-code options available!",
      button: "",
    },
    {
      category: "WALLET",
      img: add3,
      title: "ADD3",
      link: "www.add3.io",
      description:
        "EVM smart contract creation and management for web3 projects - Use Add3 to deploy customizable & compliant web3 smart contract products, dapp & analytics in minutes. Code or no-code options available!",
      button: "",
    },
    {
      category: "Bridge",
      img: add3,
      title: "ADD3",
      link: "www.add3.io",
      description:
        "EVM smart contract creation and management for web3 projects - Use Add3 to deploy customizable & compliant web3 smart contract products, dapp & analytics in minutes. Code or no-code options available!",
      button: "",
    },
    {
      category: "DEFI",
      img: add3,
      title: "ADD3",
      link: "www.add3.io",
      description:
        "EVM smart contract creation and management for web3 projects - Use Add3 to deploy customizable & compliant web3 smart contract products, dapp & analytics in minutes. Code or no-code options available!",
      button: "",
    },
    {
      category: "WALLET",
      img: add3,
      title: "ADD3",
      link: "www.add3.io",
      description:
        "EVM smart contract creation and management for web3 projects - Use Add3 to deploy customizable & compliant web3 smart contract products, dapp & analytics in minutes. Code or no-code options available!",
      button: "",
    },
    {
      category: "Bridge",
      img: add3,
      title: "ADD3",
      link: "www.add3.io",
      description:
        "EVM smart contract creation and management for web3 projects - Use Add3 to deploy customizable & compliant web3 smart contract products, dapp & analytics in minutes. Code or no-code options available!",
      button: "",
    },
    {
      category: "DEFI",
      img: add3,
      title: "ADD3",
      link: "www.add3.io",
      description:
        "EVM smart contract creation and management for web3 projects - Use Add3 to deploy customizable & compliant web3 smart contract products, dapp & analytics in minutes. Code or no-code options available!",
      button: "",
    },
    {
      category: "WALLET",
      img: add3,
      title: "ADD3",
      link: "www.add3.io",
      description:
        "EVM smart contract creation and management for web3 projects - Use Add3 to deploy customizable & compliant web3 smart contract products, dapp & analytics in minutes. Code or no-code options available!",
      button: "",
    },
    {
      category: "Bridge",
      img: add3,
      title: "ADD3",
      link: "www.add3.io",
      description:
        "EVM smart contract creation and management for web3 projects - Use Add3 to deploy customizable & compliant web3 smart contract products, dapp & analytics in minutes. Code or no-code options available!",
      button: "",
    },
    {
      category: "DEFI",
      img: add3,
      title: "ADD3",
      link: "www.add3.io",
      description:
        "EVM smart contract creation and management for web3 projects - Use Add3 to deploy customizable & compliant web3 smart contract products, dapp & analytics in minutes. Code or no-code options available!",
      button: "",
    },
    {
      category: "WALLET",
      img: add3,
      title: "ADD3",
      link: "www.add3.io",
      description:
        "EVM smart contract creation and management for web3 projects - Use Add3 to deploy customizable & compliant web3 smart contract products, dapp & analytics in minutes. Code or no-code options available!",
      button: "",
    },
    {
      category: "Bridge",
      img: add3,
      title: "ADD3",
      link: "www.add3.io",
      description:
        "EVM smart contract creation and management for web3 projects - Use Add3 to deploy customizable & compliant web3 smart contract products, dapp & analytics in minutes. Code or no-code options available!",
      button: "",
    },
    {
      category: "DEFI",
      img: add3,
      title: "ADD3",
      link: "www.add3.io",
      description:
        "EVM smart contract creation and management for web3 projects - Use Add3 to deploy customizable & compliant web3 smart contract products, dapp & analytics in minutes. Code or no-code options available!",
      button: "",
    },
    {
      category: "WALLET",
      img: add3,
      title: "ADD3",
      link: "www.add3.io",
      description:
        "EVM smart contract creation and management for web3 projects - Use Add3 to deploy customizable & compliant web3 smart contract products, dapp & analytics in minutes. Code or no-code options available!",
      button: "",
    },
    {
      category: "WALLET",
      img: add3,
      title: "ADD3",
      link: "www.add3.io",
      description:
        "EVM smart contract creation and management for web3 projects - Use Add3 to deploy customizable & compliant web3 smart contract products, dapp & analytics in minutes. Code or no-code options available!",
      button: "",
    },
    {
      category: "Bridge",
      img: add3,
      title: "ADD3",
      link: "www.add3.io",
      description:
        "EVM smart contract creation and management for web3 projects - Use Add3 to deploy customizable & compliant web3 smart contract products, dapp & analytics in minutes. Code or no-code options available!",
      button: "",
    },
    {
      category: "DEFI",
      img: add3,
      title: "ADD3",
      link: "www.add3.io",
      description:
        "EVM smart contract creation and management for web3 projects - Use Add3 to deploy customizable & compliant web3 smart contract products, dapp & analytics in minutes. Code or no-code options available!",
      button: "",
    },
    {
      category: "WALLET",
      img: add3,
      title: "ADD3",
      link: "www.add3.io",
      description:
        "EVM smart contract creation and management for web3 projects - Use Add3 to deploy customizable & compliant web3 smart contract products, dapp & analytics in minutes. Code or no-code options available!",
      button: "",
    },
    {
      category: "WALLET",
      img: add3,
      title: "ADD3",
      link: "www.add3.io",
      description:
        "EVM smart contract creation and management for web3 projects - Use Add3 to deploy customizable & compliant web3 smart contract products, dapp & analytics in minutes. Code or no-code options available!",
      button: "",
    },
    {
      category: "Bridge",
      img: add3,
      title: "ADD3",
      link: "www.add3.io",
      description:
        "EVM smart contract creation and management for web3 projects - Use Add3 to deploy customizable & compliant web3 smart contract products, dapp & analytics in minutes. Code or no-code options available!",
      button: "",
    },
    {
      category: "DEFI",
      img: add3,
      title: "ADD3",
      link: "www.add3.io",
      description:
        "EVM smart contract creation and management for web3 projects - Use Add3 to deploy customizable & compliant web3 smart contract products, dapp & analytics in minutes. Code or no-code options available!",
      button: "",
    },
    {
      category: "WALLET",
      img: add3,
      title: "ADD3",
      link: "www.add3.io",
      description:
        "EVM smart contract creation and management for web3 projects - Use Add3 to deploy customizable & compliant web3 smart contract products, dapp & analytics in minutes. Code or no-code options available!",
      button: "",
    },
    {
      category: "WALLET",
      img: add3,
      title: "ADD3",
      link: "www.add3.io",
      description:
        "EVM smart contract creation and management for web3 projects - Use Add3 to deploy customizable & compliant web3 smart contract products, dapp & analytics in minutes. Code or no-code options available!",
      button: "",
    },
  ];

  // Filter projects based on both activeTab and searchValue
  const filteredProjects = data.filter((el) => {
    const tabMatch =
      activeTab.toLowerCase() === "all" ||
      el.category.toLowerCase() === activeTab.toLowerCase();
    const searchMatch = el.title
      .toLowerCase()
      .includes(searchValue.toLowerCase());
    return tabMatch && searchMatch;
  });
  // Logic to determine how many items to display

  const loadMoreProjects = () => {
    setVisibleProjectsCount((prevCount) => prevCount + itemsPerPage);
  };
  const visibleProjects = filteredProjects.slice(0, visibleProjectsCount);

  return (
    <Wrapper bg="#F6F7F9" className={classes.wrapper}>
      <div className={clsx("container", classes.container)}>
        <div className={classes.inputContainer}>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search"
            className={classes.input}
          />
          <IoSearchOutline className={classes.searchIcon} />
        </div>
        <div className={classes.tabs}>
          {tabs.map((tab, i) => (
            <button
              key={i}
              className={clsx(
                classes.tab,
                activeTab.toLowerCase() === tab.toLowerCase() &&
                  classes.activeTab
              )}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className={classes.allProjects}>
          {visibleProjects.map((el, i) => (
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
          ))}
        </div>
        {visibleProjectsCount < filteredProjects.length && (
          <Button
            transparentBase950
            className={classes.seeMoreButton}
            onClick={loadMoreProjects}
          >
            See More
          </Button>
        )}
      </div>
    </Wrapper>
  );
};

export default OurProjects;
