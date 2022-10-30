import React from "react";
import styles from "./header.module.css";

interface IHeader {
  todoCounter: number;
}

export function Header({ todoCounter }: IHeader) {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>
        Choosen list has
        <b className={styles.number}>{todoCounter}</b>
        todos
      </h1>
    </header>
  );
}
