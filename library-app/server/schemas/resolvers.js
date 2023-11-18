const { Book, Library, User} = require('../models')

const resolvers = {
    Query: {
        books: async () => {
            return Book.find({})
        },
        book: async (parent, {bookId}) => {
            return Book.findOne({ bookId })
        },
        users: async () => {
            return User.find().populate('checkedbooks');
          },
         user: async (parent, { _id }) => {
            return User.findById( _id ).populate('checkedbooks');
          },
          libraries: async () => {
            return Library.find({}).populate('libraryowner').populate('books')
          },
          library: async (parent, { _id }) => {
            return Library.findById(_id).populate('libraryowner').populate('books')
          }
    }, 
    Mutation: {
        addBook: async (parent, {authors, description, bookId, image, link, title, available}) => {
            return await Book.create({authors, description, bookId, image, link, title, available})
        },
        addUser: async (parent, { username, email, password, isteacher, checkedbooks }) => {
            return await User.create({ username, email, password, isteacher, checkedbooks })
        }, 
        addLibrary: async (parent, {libraryname, libraryowner, books}) => {
            return await Library.create({libraryname, libraryowner, books})
        }
    }
}

module.exports = resolvers