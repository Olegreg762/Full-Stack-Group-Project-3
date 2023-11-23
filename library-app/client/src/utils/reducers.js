import {
 CHECKOUT_BOOK,
 RETURN_BOOK,
 VIEW_BOOKS,
 REVIEW_BOOK,
 ADD_BOOK,
 DELETE_BOOK,
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
 QUERY_USER ,
  QUERY_ALL_BOOKS,
 QUERY_LIBRARY,
 QUERY_LIBRARY_BOOKS,
 QUERY_CHECKOUT,
 QUERY_USER,
} from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
        // Need assitance on figuring out checkout logic and process
        case CHECKOUT_BOOK:
            let newLibrary = state.library.filter((book) => {
                return book._id !== action._id
            });
            
            if (book._id == action._id) {
                let newCheckedBooks = state.library.filter((book) => {
                    return state.checkedbooks.push(book)
                });
                return newCheckedBooks;
            };

            return {
                ...state,
                books: newLibrary,
                checkedbooks: newCheckedBooks,
            }

        case RETURN_BOOK:
            return {
                ...state,
                books: [...state.library, action.book]
            }
        
        case VIEW_BOOKS:
            return {
                ...state,  
            }
        
        case REVIEW_BOOK:

        case ADD_BOOK:

        case DELETE_BOOK:

        case ADD_LIBRARY:

        case DELETE_LIBRARY:
    }
}