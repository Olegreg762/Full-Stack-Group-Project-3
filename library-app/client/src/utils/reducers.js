import {
    CHECKOUT_BOOK,
    RETURN_BOOK,
    VIEW_BOOKS,
    REVIEW_BOOK,
    ADD_BOOK,
    DELETE_BOOK,
    ADD_LIBRARY,
    DELETE_LIBRARY,
} from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
        // Need assitance on figuring out checkout logic and process
        case CHECKOUT_BOOK:
            let newLibrary = state.library.filter((book) => {
                return book._id !== action._id
            });
            return {
                ...state,
                books: newLibrary
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