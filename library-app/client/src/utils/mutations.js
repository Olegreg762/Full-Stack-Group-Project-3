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

// export const GET_LIBRARIES = gql`
//     query {
//         libraries {
//             _id
//             libraryname
//             libraryowner{
//                 _id
//                 username
//             }
//             books {
//                 _id
//                 title
//                 author
//             }
//         }
//     }
// `;



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


export const ADD_BOOK_TO_LIBRARY = gql`
mutation AddBookToLibrary($libraryId: ID!, $book: BookInput!) {
    addBookToLibrary(libraryId: $libraryId, book: $book) {
      libraryname
      libraryowner {
        username
      }
      books {
        authors
        available
        title
      }
    }
  }
`

export const ADD_LIBRARY = gql`
mutation AddLibrary($libraryname: String!, $libraryowner: ID!) {
    addLibrary(libraryname: $libraryname, libraryowner: $libraryowner) {
      _id
      books {
        _id
      }
      libraryname
      libraryowner {
        _id
      }
    }
  }
`
export const REMOVE_BOOK_FROM_LIBRARY = gql`
mutation RemoveBookFromLibrary($libraryId: ID!, $bookId: ID!) {
    removeBookFromLibrary(libraryId: $libraryId, bookId: $bookId) {
      libraryname
      libraryowner {
        username
      }
      books {
        authors
        title
        available
      }
    }
  }
`

export const UPDATE_BOOK = gql`
mutation UpdateBook($bookId: ID!, $book: BookInput!) {
    updateBook(bookId: $bookId, book: $book) {
      authors
      title
      description
      available
    }
  }
`

export const DELETE_LIBRARY = gql`
mutation DeleteLibrary($libraryId: ID!) {
    deleteLibrary(libraryId: $libraryId) {
      message
    }
  }
`
export const DELETE_USER = gql`
mutation DeleteUser($id: ID!) {
    deleteUser(_id: $id) {
      message
    }
  }
`

export const UPDATE_USER = gql`
mutation UpdateUser($userId: ID!, $user: UserInput!) {
    updateUser(userId: $userId, user: $user) {
      checkedbooks {
        title
        authors
        description
      }
      email
      isteacher
      username
    }
  }
`

export const UPDATE_LIBRARY = gql`
mutation UpdateLibrary($libraryId: ID!, $library: LibraryInput!) {
    updateLibrary(libraryId: $libraryId, library: $library) {
      books {
        authors
        title
        description
        image
        available
        link
      }
      libraryname
      libraryowner {
        username
        email
      }
    }
  }`