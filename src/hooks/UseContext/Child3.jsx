import React, { useContext, useState } from 'react'
import { UserContext } from './UserContext'

function Child3() {
    const { data, addUser } = useContext(UserContext);

    const [name, setName] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        addUser(name);
        setName("");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <button type='submit'>Add User</button>
                </div>
            </form>
            <ul>
                {
                    data.map((user) => {
                        return <li key={user.id}>
                            {user.name}
                        </li>
                    })
                }
            </ul>
        </>
    )
}

export default Child3