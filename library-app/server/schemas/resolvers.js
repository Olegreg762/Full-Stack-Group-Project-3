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
            return Library.find({})
          },
          library: async (parent, { _id }) => {
            return Library.findById(_id)
          }
    }, 
    Mutation: {
        addBook: async (parent, {authors, description, bookId, image, link, title, available}) => {
            return await Book.create({authors, description, bookId, image, link, title, available})
        }
    }
}

module.exports = resolvers