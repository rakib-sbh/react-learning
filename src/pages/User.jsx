import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const User = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const [name, setName] = useState("");

  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ name: name, age: age });

    setAge(0);
    setName("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div>
        <h1>{searchParams.get("name")}</h1>
        <h2>{searchParams.get("age")}</h2>
      </div>
    </>
  );
};

export default User;
