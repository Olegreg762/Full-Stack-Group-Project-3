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
         user: async (parent, { username }) => {
            return User.findOne({ username }).populate('checkedbooks');
          },
    }
}

module.exports = resolvers