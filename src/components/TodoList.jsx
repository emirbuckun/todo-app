import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import TodoCount from "./TodoCount";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("localTodos")) {
      const storedList = JSON.parse(localStorage.getItem("localTodos"));
      setTodos(storedList);
    }
  }, []);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    localStorage.setItem("localTodos", JSON.stringify([todo, ...todos]));
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const deleted = [...todos].filter((todo) => todo.id !== id);
    setTodos(deleted);
    localStorage.setItem("localTodos", JSON.stringify(deleted));
  };

  const clearTodo = () => {
    setTodos([]);
    localStorage.removeItem("localTodos");
  };

  return (
    <div>
      <h1>What's the plan for today?</h1>
      <TodoForm onSubmit={addTodo} clearTodo={clearTodo} />
      <TodoCount todos={todos} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
    </div>
  );
}

export default TodoList;
