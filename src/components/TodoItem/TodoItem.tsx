import React from "react";
import { Button } from "../Button";
import styles from "./todoitem.module.css";

interface ITodoItem {
  todo: Todo;
  deleteTodo: (id: Todo["id"]) => void;
  checkTodo: (id: Todo["id"]) => void;
}

export function TodoItem({ todo, deleteTodo, checkTodo }: ITodoItem) {
  return (
    <li
      className={styles.container}
      style={{ opacity: todo.checked ? 0.8 : 1 }}
      data-testid="todo"
    >
      <div
        className={styles.title}
        style={{
          opacity: todo.checked ? 0.5 : 1,
          textDecoration: todo.checked ? "line-through" : "none",
        }}
        onClick={() => checkTodo(todo.id)}
        data-testid="todoTitle"
      >
        {todo.name}
      </div>
      <div className={styles.button_container}>
        <Button
          color="red"
          onClick={() => deleteTodo(todo.id)}
          data-testid="deleteTodo"
        >
          DELETE
        </Button>
      </div>
    </li>
  );
}
