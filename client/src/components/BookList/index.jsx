import LibraryHub from "../../pages/LibraryHub";
import BookAddPage from "../../pages/BookAddPage";
import { useLibraryContext } from "../../utils/GlobalState";
import { ADD_BOOK_TO_LIBRARY, REMOVE_BOOK_FROM_LIBRARY } from "../../utils/actions";

const AddBook = () => {
    const [state, dispatch] = useLibraryContext;

    const updateOnClick = (e) => {
        e.preventDefault();
        dispatch({
            type: ADD_BOOK_TO_LIBRARY,
        });

        const addBookResults = state.isValid
            ? 'Book succesfully added to Library!'
            : 'Failed to add book to Library'
        
            alert(addBookResults)
    };

    return (
        <LibraryHub>
            <button
                type="button"
                id="button"
                className="btn"
                onClick={updateOnClick}
            >
                Add Book
            </button>
        </LibraryHub>
    )
};

const RemoveBook = () => {
    const [state, dispatch] = useLibraryContext;

    const updateOnClick = (e) => {
        e.preventDefault();
        dispatch({
            type: REMOVE_BOOK_FROM_LIBRARY,
        });

        const removeBookResults = state.isValid
            ? 'Book successfully removed from Library!'
            : 'Failed to remove book from Library'
        
            alert(removeBookResults);
    };

    return (
        <LibraryHub>
            <button
                type="button"
                id="button"
                className="btn"
                onClick={updateOnClick}
            >
                Remove Book
            </button>
        </LibraryHub>
    )
};

export default { AddBook, RemoveBook };