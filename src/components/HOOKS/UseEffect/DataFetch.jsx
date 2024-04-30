import { useEffect, useState } from "react";

import Todo from "./Todo";

const DataFetch = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => {
        console.log("Error in fetching data");
      });
  }, []);
  return (
    <div>
      <h1>Data Fetching</h1>
      {todos && todos.map((todo) => <Todo {...todo} key={todo.id} />)}
      {console.log(todos)}
    </div>
  );
};

export default DataFetch;
