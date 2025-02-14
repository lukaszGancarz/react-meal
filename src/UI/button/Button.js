import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <div
      type={props.type || "button"}
      className={`${styles.button} ${props.className}`}
      onClick={props.onClick}
    >
      {props.label}
    </div>
  );
};
