import style from "./todo.module.css";

const Todo = ({ title }) => {
  return <div className={style.todo}>{title}</div>;
};

export default Todo;
