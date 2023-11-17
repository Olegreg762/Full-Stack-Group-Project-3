import { gql } from "@apollo/client";

export const QUERY_ALL_BOOKS = gql`
    query getBooks() {
        books() {
            _id
            title
            author
            image
            description
            available
        }
    }
`;

export const QUERY_LIBRARY = gql`
    query getLibraries() {
        libraries() {
            _id
            libraryname
            libraryowner
        }
    }
`;

export const QUERY_LIBRARY_BOOKS = gql`
    query getLibraryBooks($library: ID) {
        libraries(library: $library) {
            _id
            libraryname
            libraryowner
            books {
                _id
                title
                author
                available
            }
        }
    }
`;

export const QUERY_CHECKOUT = gql`
    query getCheckout($books: ID!) {
        checkout(books: $books) {
            session
        }
    }
`;

export const QUERY_USER = gql`
    {
        user {
            _id
            username
            email
            isteacher
            checkedbooks
        }
    }
`;