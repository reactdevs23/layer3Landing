import React from "react";
import classes from "./Dropdown.module.css";
import { Link } from "react-router-dom";
const Dropdown = ({ dropdownItems, setActive }) => {
  return (
    <div className={classes.wrapper}>
      {dropdownItems.map((el, i) => (
        <Link
          className={classes.item}
          to={el.to}
          key={i}
          onClick={() => setActive(null)}
        >
          {el.item}
        </Link>
      ))}
    </div>
  );
};

export default Dropdown;
