import React from "react";
import clsx from "clsx";
import classes from "./ExploreButton.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const ExploreButton = ({
  children,
  onClick,
  link,
  wFull,
  arrowBg,
  arrowColor,

  className,
}) => {
  return (
    <>
      {onClick ? (
        <button
          className={clsx(
            className,
            classes.button,

            wFull && classes.wFull
          )}
          onClick={onClick}
        >
          {children}

          <div
            className={clsx(classes.arrowContainer)}
            style={{ background: arrowBg }}
          >
            <AiOutlineArrowRight
              className={className.icon}
              style={{ color: arrowColor }}
            />
          </div>
        </button>
      ) : link ? (
        <a
          className={clsx(className, classes.button, wFull && classes.wFull)}
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          {children}{" "}
          <div
            className={clsx(classes.arrowContainer)}
            style={{ background: arrowBg }}
          >
            <AiOutlineArrowRight
              className={className.icon}
              style={{ color: arrowColor }}
            />
          </div>
        </a>
      ) : (
        <button
          className={clsx(className, classes.button, wFull && classes.wFull)}
        >
          {children}{" "}
          <div
            className={clsx(classes.arrowContainer)}
            style={{ background: arrowBg }}
          >
            <AiOutlineArrowRight
              className={className.icon}
              style={{ color: arrowColor }}
            />
          </div>
        </button>
      )}
    </>
  );
};

export default ExploreButton;
