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
        case CHECKOUT_BOOK:
            return {
                ...state,
                books: [...action.books]
            }
    }
}