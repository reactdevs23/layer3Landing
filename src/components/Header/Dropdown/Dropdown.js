import React from "react";
import classes from "./Dropdown.module.css";
import { Link } from "react-router-dom";
import clsx from "clsx";

const Dropdown = ({ dropdownItems, setActive, setSidebar, isTransparent }) => {
  return (
    <div
      className={clsx(classes.wrapper, isTransparent && classes.transparent)}
    >
      {dropdownItems.map((el, i) => (
        <Link
          className={classes.item}
          to={el.to}
          key={i}
          onClick={() => {
            setActive(null);
            setSidebar(false);
          }}
        >
          {el.item}
        </Link>
      ))}
    </div>
  );
};

export default Dropdown;
