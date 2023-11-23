import {
 VIEW_BOOKS,
 ADD_LIBRARY,
 DELETE_LIBRARY,
 LOGIN,
 ADD_USER,
 BOOK_CHECKOUT,
 BOOK_RETURN,
 ADD_BOOK_TO_LIBRARY,
 REMOVE_BOOK_FROM_LIBRARY,
 UPDATE_BOOK,
 DELETE_USER,
 UPDATE_USER,
 UPDATE_LIBRARY,
} from './actions';

export const reducer = (state, action) => {
    switch (action.type) {

        case BOOK_CHECKOUT:
            let newCheckedLibrary = state.library.filter((book) => {
                return book._id !== action._id
            });
            
           
            let newCheckedBooks = state.library.filter((book) => {
                if (book._id == action._id) {
                    return state.checkedbooks.push(book)
                }
            });

            return {
                ...state,
                books: newCheckedLibrary,
                checkedbooks: newCheckedBooks,
            }
        // Need assitance on figuring out checkout logic and process
        case BOOK_RETURN:
            let newReturnLibrary = state.library.filter((book) => {
                if (book._id == action._id) {
                    return state.books.push(book)
                };
            });
            
            let returnedBooks = state.checkedbooks.filter((book) => {
                return book._id !== action._id
            });
            
            return {
                ...state,
                books: newReturnLibrary,
                checkedbooks: returnedBooks,
            }
        
        case VIEW_BOOKS:
            return {
                ...state,  
            }

        case ADD_BOOK_TO_LIBRARY:

        case REMOVE_BOOK_FROM_LIBRARY:

        case ADD_LIBRARY:

        case DELETE_LIBRARY:
    }
}