import React from "react";
import styles from "./todomanager.module.css";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";

interface ITodoManager {
  todos: Todo[];
  setFiltredTodos: (filtredTodos: React.SetStateAction<Todo[]>) => void;
  radioValue: string | boolean;
  setRadioValue: (radioValue: React.SetStateAction<string>) => void;
}

export function TodoManager({
  todos,
  setFiltredTodos,
  radioValue,
  setRadioValue,
}: ITodoManager) {
  const options = [
    { label: "All", value: "All" },
    { label: "Active", value: false },
    { label: "Completed", value: true },
  ];

  const onChange = ({ target: { value } }: RadioChangeEvent) => {
    if (value === "All") {
      setFiltredTodos(todos);
    } else {
      setFiltredTodos(todos.filter((el) => el.checked === value));
    }
    setRadioValue(value);
  };
  return (
    <div className={styles.container}>
      <Radio.Group
        options={options}
        onChange={onChange}
        value={radioValue}
        optionType="button"
        data-testId="filter"
      />
    </div>
  );
}
