import { gql } from "@apollo/client";

export const QUERY_ALL_BOOKS = gql`
    query getBooks {
        books {
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
    query getLibraries {
        libraries {
            _id
            libraryowner {
              _id
              username
            }
            libraryname
            books {
              _id
              title
              bookId
              image
              authors
              description
              available
            }
        }
    }
`;

export const QUERY_LIBRARY_BOOKS = gql`
    query getLibraryBooks($id: ID!) {
        library(_id: $id) {
            _id
            libraryname
            libraryowner{
                username
            }
            books {
                _id
                title
                authors
                description
                available
            }
        }
    }
`;



export const GET_LIBRARIES = gql`
query Query {
    libraries {
      _id
      libraryname
      libraryowner {
        _id
        username
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
    query User($id: ID!) {
        user(_id: $id) {
            _id
            username
            email
            password
            isteacher
            checkedbooks {
                _id
                title
            }
        }
    }
`;

export const QUERY_ONE_USER = gql`query User($id: ID!) {
    user(_id: $id) {
      _id
      checkedbooks {
        title
        link
        authors
        image
      }
      isteacher
      username
      email
    }
  }`
