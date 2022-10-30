import React, { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../Button";
import styles from "./todomaker.module.css";

interface ITodoMaker {
  handleAddTodo: ({ name }: Pick<Todo, "name">) => void;
}

export function TodoMaker({ handleAddTodo }: ITodoMaker) {
  const [value, setValue] = useState({ name: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({ name: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleAddTodo(value);
    setValue({ name: "" });
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit} data-testid="form">
        <input
          className={styles.formInput}
          type="text"
          autoComplete="off"
          id="name"
          name="name"
          value={value.name}
          onChange={handleChange}
          data-testid="input"
        />
        <Button color="blue">ADD Todo</Button>
      </form>
    </div>
  );
}
