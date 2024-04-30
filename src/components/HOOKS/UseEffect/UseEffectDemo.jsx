import React, { useEffect, useState } from "react";

const UseEffectDemo = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Use Effect before");
  }, []);

  useEffect(() => {
    console.log("Use Effect is called");
  }, [count]);

  useEffect(() => {
    console.log("Use Effect is called again");
  }, []);
  return (
    <div>
      {console.log("Rendered", count)}
      <h3>Count : {count}</h3>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
};

export default UseEffectDemo;
