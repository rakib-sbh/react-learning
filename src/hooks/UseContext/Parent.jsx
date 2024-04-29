import { UserContext } from "./UserContext";

import Child1 from "./Child1";
import { useState } from "react";

const userData = [
    { id: 1, name: "Rakib Talukder Rupom" },
    { id: 2, name: "Mahbub Talukder Mithu" },
    { id: 3, name: "Saima Talukder Showkhin" }
]

const Parent = () => {
    const [users, setUsers] = useState(userData);

    const addUser = (userName) => {
        const user = {
            id: new Date().getTime().toLocaleString(),
            name: userName
        }

        setUsers([...users, user]);
    }

    return <UserContext.Provider value={{ data: users, addUser }}>
        <Child1 />
    </UserContext.Provider>
}

export default Parent;