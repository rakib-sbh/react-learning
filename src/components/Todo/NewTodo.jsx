import { useState } from "react";

const NewTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="todo">Todo Name: </label>
          <input type="text" name="todo" value={todo} onChange={handleChange} />
        </div>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default NewTodo;
