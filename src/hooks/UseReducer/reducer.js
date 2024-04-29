const reducer = (state, action) => {
    if (action.type === "ADD") {
        const newBook = {
            id: new Date().getTime().toLocaleString(),
            name: action.data
        };

        return {
            books: [...state.books, newBook],
            isModalOpen: true,
            modalText: "Book Added"
        }
    }

    if (action.type === "REMOVE") {
        const filteredBooks = [...state.books].filter((book) => book.id !== action.id);

        return {
            books: filteredBooks,
            isModalOpen: true,
            modalText: "Book Removed"
        }
    }
}

export default reducer;