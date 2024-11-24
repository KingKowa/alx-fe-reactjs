import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

const sampleTodos = [
  { id: 1, text: "Test Todo 1", completed: false },
  { id: 2, text: "Test Todo 2", completed: true },
];

test("renders a list of todos", () => {
  render(
    <TodoList
      todos={sampleTodos}
      onToggleTodo={jest.fn()}
      onDeleteTodo={jest.fn()}
    />
  );

  expect(screen.getByText("Test Todo 1")).toBeInTheDocument();
  expect(screen.getByText("Test Todo 2")).toBeInTheDocument();
});

test("calls onToggleTodo when a todo is clicked", () => {
  const toggleTodoMock = jest.fn();
  render(
    <TodoList
      todos={sampleTodos}
      onToggleTodo={toggleTodoMock}
      onDeleteTodo={jest.fn()}
    />
  );

  const todo = screen.getByText("Test Todo 1");
  fireEvent.click(todo);

  expect(toggleTodoMock).toHaveBeenCalledWith(1);
});

test("calls onDeleteTodo when delete button is clicked", () => {
  const deleteTodoMock = jest.fn();
  render(
    <TodoList
      todos={sampleTodos}
      onToggleTodo={jest.fn()}
      onDeleteTodo={deleteTodoMock}
    />
  );

  const deleteButton = screen.getAllByText("Delete")[0];
  fireEvent.click(deleteButton);

  expect(deleteTodoMock).toHaveBeenCalledWith(1);
});
