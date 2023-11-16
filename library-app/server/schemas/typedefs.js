const typeDefs = `
type Book{
    _id: ID
}

type Library{
    _id: ID
}

type User{
    _id: ID
}

type Query{
    books: [Book]
    libraries: [Library]
    users: [Users]
}

`