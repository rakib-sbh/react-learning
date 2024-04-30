import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
  const handleClick = () => {
    toast("Welcome to TODO App");
  };
  return (
    <div>
      <h1>Todo App</h1>
      <button onClick={handleClick}>Click Me</button>
      <ToastContainer />
    </div>
  );
};

export default Toast;
