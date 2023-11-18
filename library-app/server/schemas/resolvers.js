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
        addBookToLibrary: async (parent, { libraryId, book }) => {
            try {
              const updatedLibrary = await Library.findByIdAndUpdate(
                libraryId,
                { $push: { books: book } },
                { new: true }
              );
      
              return updatedLibrary.populate('books');
            } catch (error) {
              throw new Error('Failed to add book to library');
            }
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