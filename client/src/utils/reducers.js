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

        case BOOK_RETURN:
            let newReturnLibrary = state.library.filter((book) => {
                if (book._id == action._id) {
                    return state.books.push(book)
                };
            });
            
            let returnedBooks = state.checkedbooks.filter((book) => {
                return book._id !== action._id
            });

            let newReadBooks = state.library.filter((book) => {
                if (book._id == action.id) {
                    return state.user.readBooks.push(book)
                }
            });
            
            return {
                ...state,
                books: newReturnLibrary,
                checkedbooks: returnedBooks,
                readBooks: newReadBooks
            }

        case ADD_BOOK_TO_LIBRARY:
            let newLibraryBooks = state.filter((library, book) => {
                return library.books.push(book)
            });

            return {
                ...state,
                library: {
                    books: newLibraryBooks,
                }
            }

        case REMOVE_BOOK_FROM_LIBRARY:
            let updatedLibraryBooks = state.filter((library, book) => {
                return library.books.splice(book)
            });

            return {
                ...state,
                library: {
                    books: updatedLibraryBooks,
                }
            }

        // case ADD_LIBRARY:
        //     return {
        //         ...state,
        //         libraries: action.payload[0],
        //         books: action.payload[1]
        //     }

        case DELETE_LIBRARY:
            return {
                ...state,
                libraries: state.libraries.filter((library) => library.id !== action.payload)
            }
        
        case UPDATE_LIBRARY:
            return state.map((library) => {
                if (library._id == action.payload._id) {
                    return {
                        ...state,
                        libraries: action.payload
                    }
                } else {
                    return {
                        ...state,
                        libraries: library
                    }
                }
            });
    }
}