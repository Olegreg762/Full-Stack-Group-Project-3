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

 export const ADD_BOOK_DB = gql`
mutation AddBookDB($description: String!, $title: String!, $authors: [String], $bookId: String, $image: String, $link: String, $available: Boolean) {
    addBookDB(description: $description, title: $title, authors: $authors, bookId: $bookId, image: $image, link: $link, available: $available) {
      _id
      authors
      available
      bookId
      description
      image
      link
      title
    }
  }
 `;

 export const ADD_BOOK_LIBRARY = gql`
 mutation AddBookToLibrary($libraryId: ID!, $bookId: ID!) {
    addBookToLibrary(libraryId: $libraryId, bookId: $bookId) {
      libraryname
      books {
        _id
        authors
        available
        bookId
        description
        image
        link
        title
      }
    }
  }
 `;


export const UPDATE_USER = gql`
mutation UpdateUser($userId: ID!, $user: UserInput!) {
    updateUser(userId: $userId, user: $user) {
      _id
      checkedbooks {
        title
        _id
        authors
        bookId
        description
        image
        link
      }
      email
      isteacher
      username
    }
  }
`;

export const ADD_LIBRARY = gql`
  mutation addLibrary($libraryname: String!, $libraryowner: ID!) {
    addLibrary(libraryname: $libraryname, libraryowner: $libraryowner) {
        _id
        libraryname
        libraryowner {
            _id
        }
        books {
            _id
        }
    }
}`;

  