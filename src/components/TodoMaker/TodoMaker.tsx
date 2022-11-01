import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import { Button } from "../Button";
import styles from "./todomaker.module.css";

interface ITodoMaker {
  handleAddTodo: ({ name }: Pick<Todo, "name">) => void;
}

export function TodoMaker({ handleAddTodo }: ITodoMaker) {
  const [value, setValue] = useState({ name: "" });
  const [error, setError] = useState<null | string>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({ name: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputRef.current && inputRef.current.value.length < 1) {
      setError("Enter todo title");
      return;
    }
    setError(null);
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
          ref={inputRef}
          data-testid="input"
        />
        {error && <p className={styles.error}>{error}</p>}
        <Button color="blue">ADD Todo</Button>
      </form>
    </div>
  );
}
