import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders TodoList with initial todos", () => {
    render(<TodoList />);

    // Check if initial todos are rendered
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    // Simulate user input
    const input = screen.getByPlaceholderText("Enter a new todo");
    const addButton = screen.getByText("Add Todo");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(addButton);

    // Verify the new todo is added
    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("toggles todo completion status", () => {
    render(<TodoList />);

    const todoItem = screen.getByText("Learn React");
    expect(todoItem).not.toHaveStyle("text-decoration: line-through");

    // Simulate clicking the todo to toggle completion
    fireEvent.click(todoItem);

    // Verify completion status has changed
    expect(todoItem).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);

    const todoItem = screen.getByText("Learn React");
    const deleteButton = screen.getAllByText("Delete")[0];

    // Simulate clicking the delete button
    fireEvent.click(deleteButton);

    // Verify the todo item is deleted
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
