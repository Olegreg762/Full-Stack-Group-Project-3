import LibraryHub from "../../pages/LibraryHub";
import { useLibraryContext } from "../../utils/GlobalState";
import { ADD_BOOK_TO_LIBRARY, REMOVE_BOOK_FROM_LIBRARY } from "../../utils/actions";

const AddBook = () => {
    const [state, dispatch] = useLibraryContext;

    const updateOnSubmit = (e) => {
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
            <form
                type="form"
                id="form"
                className="form"
                onSubmit={updateOnSubmit}
            >
                {state.payload}
            </form>
        </LibraryHub>
    )
}