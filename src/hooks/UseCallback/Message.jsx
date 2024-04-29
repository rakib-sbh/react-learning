import { memo } from "react";

const Message = ({ numOfMessage, onHandleMessage }) => {
    console.log("Message rendering");

    return <>
        <h1>Number of {numOfMessage} message</h1>
        <button onClick={onHandleMessage}>Increment Message</button>
    </>
}

export default memo(Message);