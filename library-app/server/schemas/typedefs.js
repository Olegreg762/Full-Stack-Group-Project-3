const typeDefs = `
type Book {
    _id: ID
    authors: String
    description: String!
    bookId: String
    image: String
    link: String
    title: String!
    availible: Boolean
}

type Library {
    _id: ID
    libraryname: String!
    libraryowner: User!
    books: [Book]
}

type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    isteacher: Boolean
    checkedbooks: [Book]
}

 type Query {
    books: [Book]
    libraries: [Library]
    users: [User]
    user(_id: ID!): User
    book(bookId: String): Book
}

type Auth {
    token: ID!
    user: User
  }



`
module.exports = typeDefs