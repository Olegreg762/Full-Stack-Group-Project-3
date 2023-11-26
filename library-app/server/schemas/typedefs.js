const typeDefs = `
type Book {
    _id: ID
    authors: [String]
    description: String!
    bookId: String
    image: String
    link: String
    title: String!
    available: Boolean
}

type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    isteacher: Boolean
    checkedbooks: [Book]
}

type Library {
    _id: ID
    libraryname: String!
    libraryowner: User!
    books: [Book]
}


input BookInput {
    _id: ID!
    authors: [String]
    description: String!
    bookId: String
    image: String
    link: String
    title: String!
    available: Boolean
}

input UserInput {
    _id: ID!
}

input LibraryInput {
    _id: ID!
}

type DeleteResponse {
    message: String!
}

type Query {
    books: [Book]
    libraries: [Library]
    users: [User]
    user(_id: ID!): User
    book(bookId: String): Book
    library(_id: ID!): Library
}
type Mutation{
    login(email: String!, password: String): Auth

    addBookDB(authors: [String], description: String!, bookId: String, image: String, link: String, title: String!, available: Boolean): Book

    addBookToLibrary(libraryId: ID!, bookId: ID!): Library

    addUser(username: String!, email: String!, password: String!, isteacher: Boolean, checkedbooks: [ID]): User

    addLibrary(libraryname: String!, libraryowner: ID!): Library

    removeBookFromLibrary(libraryId: ID!, bookId: ID!): Library

    updateBook(bookId: ID!, book: BookInput!): Book

    deleteLibrary(libraryId: ID!): DeleteResponse

    deleteUser(_id: ID!): DeleteResponse

    updateUser(userId: ID!, user: UserInput!): User

    updateLibrary(libraryId: ID!, library: LibraryInput!): Library

    checkoutBook(userId: ID!, bookId: ID!): User

    returnBook(userId: ID!, bookId: ID!): User
}

type Auth {
    token: ID!
    user: User
  }



`
module.exports = typeDefs