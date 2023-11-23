import { gql } from "@apollo/client";

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser(
        $username: String!
        $email: String!
        $password: String!
        $isteacher: Boolean!
    ) {
        addUser(
            username: $username
            email: $email
            password: $password
            isteacher: $isteacher
        ) {
            username
            email
            isteacher
        }
    }
`;

export const BOOK_CHECKOUT = gql`
    mutation checkoutBook($userId: ID!, $bookId: ID!) {
        checkoutBook(userId: $userId, bookId: $bookId) {
            _id
            checkedbooks {
                _id
                title
            }
        }
    }
`;

export const BOOK_RETURN = gql`
    mutation returnBook($userId: ID!, $bookId: ID!) {
        returnBook(userId: $userId, bookId: $bookId) {
            _id
            checkedbooks {
                _id
                title
            }
        }
    }
`;


