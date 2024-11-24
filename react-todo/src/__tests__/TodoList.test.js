import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("toggles a todo's completed state", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");

    // Check initial state
    expect(todoItem).not.toHaveStyle("text-decoration: line-through");

    // Toggle to completed
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");

    // Toggle back to not completed
    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");
    const deleteButton = todoItem.nextSibling;

    // Delete the todo
    fireEvent.click(deleteButton);

    expect(todoItem).not.toBeInTheDocument();
  });
});
