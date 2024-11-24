import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

const initialTodos = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Build a Todo App", completed: true },
  { id: 3, text: "Test the App", completed: false },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  // Add a new todo
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  // Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList
        todos={todos}
        onToggleTodo={toggleTodo}
        onDeleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
