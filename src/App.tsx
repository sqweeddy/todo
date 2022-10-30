import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { TodoItem } from "./components/TodoItem";
import { TodoMaker } from "./components/TodoMaker";
import { TodoManager } from "./components/TodoManager";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filtredTodos, setFiltredTodos] = useState(todos);
  const [radioValue, setRadioValue] = useState("All");
  const [id, setId] = useState(1);

  useEffect(() => {
    setFiltredTodos(todos);
  }, [todos]);

  const handleAddTodo = ({ name }: Pick<Todo, "name">) => {
    setRadioValue("All");
    setTodos([...todos, { id: id, name, checked: false }]);
    setId((id) => ++id);
  };

  const handleDeleteTodo = (id: Todo["id"]) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleCheckTodo = (id: Todo["id"]) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      })
    );
  };
  return (
    <div className={styles.app_container}>
      <div className={styles.container}>
        <Header todoCounter={filtredTodos.length} />
        <TodoMaker handleAddTodo={handleAddTodo} />
        <TodoManager
          todos={todos}
          setFiltredTodos={setFiltredTodos}
          radioValue={radioValue}
          setRadioValue={setRadioValue}
        />
        <ul className={styles.list} data-testid="todoList">
          {filtredTodos.map((el) => (
            <TodoItem
              key={el.id}
              todo={el}
              checkTodo={handleCheckTodo}
              deleteTodo={handleDeleteTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
