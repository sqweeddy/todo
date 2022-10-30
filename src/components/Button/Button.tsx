import React from "react";
import styles from "./button.module.css";

interface IButton extends React.ComponentPropsWithRef<"button"> {
  color: "blue" | "red";
}

export function Button({ color, children, onClick }: IButton) {
  const className = `${styles.button} ${styles[`${color}`]}`;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
