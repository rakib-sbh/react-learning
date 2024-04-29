import { useReducer, useRef, useState } from "react";

import reducer from "./reducer";

const Modal = ({ modalText }) => {
    return <p>{modalText}</p>
}

const booksData = [
    { id: 1, name: "Hoping You Are Fine" },
    { id: 2, name: "New Year Gift From Me" },
    { id: 3, name: "Just Go Around And Chill" }
];



const UseReducer = () => {
    const [bookState, dispatch] = useReducer(reducer, {
        books: booksData,
        isModalOpen: false,
        modalText: ""
    })

    const inputRef = useRef();
    const [bookName, setBookName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({ type: "ADD", data: bookName })
        inputRef.current.value = "";
    }

    const removeBook = (id) => {
        dispatch({ type: "REMOVE", id })
    }

    return <>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => { setBookName(e.target.value) }} ref={inputRef} />
            <button type="submit">Add</button>
        </form>
        {bookState.isModalOpen && <Modal modalText={bookState.modalText} />}
        <h1>Book List Of Me</h1>
        <ul>
            {
                bookState.books.map((book) => {
                    return <li key={book.id}>{book.name} <button onClick={() => removeBook(book.id)}>Remove</button></li>
                })
            }
        </ul>
    </>
}

export default UseReducer