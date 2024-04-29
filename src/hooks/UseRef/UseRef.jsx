import { useRef } from "react";

const UseRef = () => {

    const userNameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submitted");
        console.log(userNameRef.current.value);
        console.log(passwordRef.current.value);

        userNameRef.current.style.color = "green";
        userNameRef.current.style.backgroundColor = "red"
    }

    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="userName">User Name: </label>
            <input type="text" id="userName" ref={userNameRef} />
        </div>

        <div>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" ref={passwordRef} />
        </div>
        <button type="submit">Register</button>
    </form>
}

export default UseRef