import React, { useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";

import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import Button from "../../common/Button/Button";
import { logo } from "../../images";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

import Dropdown from "./Dropdown/Dropdown";
import useOnClickOutside from "../../hooks";
import clsx from "clsx";

const Header = () => {
  const ref = useRef(null);
  const [active, setActive] = useState(null);
  const navItems = [
    {
      navItem: "Our Products",
      dropdownItems: [
        { item: "Product1", to: "/" },
        { item: "Product1", to: "/" },
        { item: "Product1", to: "/" },
      ],
    },
    {
      navItem: "Developers",
      dropdownItems: [
        { item: "Start Building", to: "/start-building" },
        { item: "Ecosystem", to: "/ecosystem" },
        { item: "Docs", to: "/docs" },
      ],
    },
    {
      navItem: "Resources",
      dropdownItems: [
        { item: "Product1", to: "/" },
        { item: "Product1", to: "/" },
        { item: "Product1", to: "/" },
      ],
    },
    {
      navItem: "Community",
      dropdownItems: [
        { item: "Product1", to: "/" },
        { item: "Product1", to: "/" },
        { item: "Product1", to: "/" },
      ],
    },
  ];
  const [sidebar, setSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useOnClickOutside(ref, () => setActive(false));
  return (
    <div
      className={[classes.wrapper, isScrolled && classes.wrapperBg].join(" ")}
    >
      <header className={[classes.header, "container"].join(" ")}>
        <Link
          className={[classes.logoContainer].join(" ")}
          to="#"
          onClick={() => setSidebar((prev) => !prev)}
        >
          <img src={logo} alt="#" className={classes.logo} />
        </Link>

        <div
          className={[classes.navItems, sidebar && classes.sidebar].join(" ")}
        >
          {navItems.map((el, i) => (
            <div
              ref={ref}
              key={i}
              className={clsx(classes.navItem)}
              to={el.to}
              onClick={() => {
                if (active === i) {
                  setActive(null);
                } else {
                  setActive(i);
                }
              }}
            >
              {el.navItem}
              {i === active ? (
                <FaAngleUp
                  className={clsx(classes.arrow, classes.activeArrow)}
                />
              ) : (
                <FaAngleDown className={classes.arrow} />
              )}
              {i === active && <Dropdown dropdownItems={el.dropdownItems} />}
            </div>
          ))}
          <Button base0 onClick={() => {}} className={classes.button}>
            Connect
          </Button>
        </div>

        {sidebar ? (
          <div
            className={classes.iconContainer}
            onClick={() => setSidebar((prev) => !prev)}
          >
            <IoMdClose className={classes.icon} />
          </div>
        ) : (
          <div className={classes.iconContainer}>
            <RxHamburgerMenu
              className={classes.icon}
              onClick={() => setSidebar((prev) => !prev)}
            />
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
