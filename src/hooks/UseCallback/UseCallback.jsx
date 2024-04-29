import { useCallback, useState } from "react";

import Message from "./Message";

const UseCallback = () => {
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);

    console.log("UseCallback rendering");

    const handleMessageCount = useCallback(() => {
        setCount(count + 1)
    }, [count]);

    return <>
        {
            toggle ? <span>ON</span> : <span>OFF</span>
        }
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <Message numOfMessage={count} onHandleMessage={handleMessageCount} />
    </>
}

export default UseCallback;