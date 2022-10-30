import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("renders form and button for creating Todo", () => {
  render(<App />);
  const createTodoBtn = screen.getByText(/ADD Todo/i);
  const todoMaker = screen.getByTestId("form");
  expect(createTodoBtn).toBeInTheDocument();
  expect(todoMaker).toBeInTheDocument();
});

test("creating Todo and then delete it", () => {
  render(<App />);
  const createTodoBtn = screen.getByText(/ADD Todo/i);
  const input = screen.getByTestId("input");

  expect(screen.queryByTestId("todo")).toBeNull();
  userEvent.type(input, "New Todo");
  userEvent.click(createTodoBtn);
  expect(screen.getByTestId("todo")).toBeInTheDocument();
  expect(screen.getByTestId("todoTitle")).toHaveTextContent("New Todo");

  userEvent.click(screen.getByText(/DELETE/i));
  expect(screen.queryByTestId("todo")).toBeNull();
});

test("switch todo`s state", () => {
  render(<App />);
  const createTodoBtn = screen.getByText(/ADD Todo/i);
  const input = screen.getByTestId("input");

  userEvent.type(input, "New Todo");
  userEvent.click(createTodoBtn);

  userEvent.click(screen.getByTestId("todoTitle"));
  expect(screen.getByTestId("todoTitle")).toHaveStyle(
    "text-decoration: line-through"
  );
});

test("filter working correctly", () => {
  render(<App />);
  const createTodoBtn = screen.getByText(/ADD Todo/i);
  const input = screen.getByTestId("input");

  userEvent.type(input, "New Todo");
  userEvent.click(createTodoBtn);

  userEvent.click(screen.getByText(/Active/i));
  expect(screen.getByText(/New Todo/i)).toBeInTheDocument();

  userEvent.click(screen.getByText(/Completed/i));
  expect(screen.queryByText(/New Todo active/i)).toBeNull();
});
