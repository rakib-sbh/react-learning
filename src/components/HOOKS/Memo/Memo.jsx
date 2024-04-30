import React, { useState } from "react";
import Message from "./Message";

const Memo = () => {
  const [count, setCount] = useState(0);
  console.log("Memo component Rendering");
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Message />
    </>
  );
};

export default Memo;
