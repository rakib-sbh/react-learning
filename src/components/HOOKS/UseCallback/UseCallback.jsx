import { useState } from "react";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {toggle ? <span>ON</span> : <span>OFF</span>}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

export default UseCallback;
