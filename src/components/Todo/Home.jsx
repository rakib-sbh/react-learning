import React, { useState } from "react";
import Todos from "./Todos";
import NewTodo from "./NewTodo";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };
  return (
    <div>
      <h1>Todo</h1>
      <NewTodo addTodo={addTodo} />
      <Todos todos={todos} />
    </div>
  );
};

export default Home;
