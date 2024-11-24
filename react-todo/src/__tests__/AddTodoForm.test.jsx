import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddTodoForm from "./AddTodoForm";

test("renders input and button", () => {
  render(<AddTodoForm onAddTodo={jest.fn()} />);
  expect(screen.getByPlaceholderText("Enter a new todo")).toBeInTheDocument();
  expect(screen.getByText("Add Todo")).toBeInTheDocument();
});

test("calls onAddTodo with input value", () => {
  const addTodoMock = jest.fn();
  render(<AddTodoForm onAddTodo={addTodoMock} />);

  const input = screen.getByPlaceholderText("Enter a new todo");
  fireEvent.change(input, { target: { value: "Test Todo" } });

  const button = screen.getByText("Add Todo");
  fireEvent.click(button);

  expect(addTodoMock).toHaveBeenCalledWith("Test Todo");
});
