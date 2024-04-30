import { useState } from "react";
import style from "./form.module.css";

const Form = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div>
      <h1 className={style.heading}>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className={style.inputGroup}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className={style.inputGroup}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className={style.inputGroup}>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className={style.button}>
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default Form;
