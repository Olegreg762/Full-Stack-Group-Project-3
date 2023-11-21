const { Book, Library, User} = require('../models')
const { signToken, AuthenticationError } = require('../utils/auth');


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

      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
        console.log(user);
        if (!user) {
          throw AuthenticationError;
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          console.log("asdfasdf")
          throw AuthenticationError;
        }
  
        const token = signToken(user);
  
        return { token, user };
        
      },

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
        },
        //TODO: Functions for removing book from library, updating book values, deleting libraries, deleting users, updating users, updating library info

     removeBookFromLibrary: async (parent, { libraryId, bookId }) => {
    try {
        const updatedLibrary = await Library.findByIdAndUpdate(
          libraryId,
          { $pull: { books: { _id: bookId } } },
          { new: true }
        ).populate('books');
  
        return updatedLibrary;
      } catch (error) {
        throw new Error('Failed to remove book from library');
      }
    },
  
    updateBook: async (parent, { bookId, book }) => {
      try {
        const updatedBook = await Book.findByIdAndUpdate(
          bookId,
          { $set: book },
          { new: true }
        );
  
        return updatedBook;
      } catch (error) {
        throw new Error('Failed to update book');
      }
    },
  
    deleteLibrary: async (parent, { libraryId }) => {
      try {
        await Library.findByIdAndDelete(libraryId);
  
        return {
          message: 'Library deleted successfully',
        };
      } catch (error) {
        throw new Error('Failed to delete library');
      }
    },
  
    deleteUser: async (parent, { _id }) => {
      try {
        await User.findByIdAndDelete(_id);
  
        return {
          message: 'User deleted successfully',
        };
      } catch (error) {
        throw new Error('Failed to delete user');
      }
    },
  
    updateUser: async (parent, { userId, user }) => {
      try {
        const updatedUser = await User.findByIdAndUpdate(
          userId,
          { $set: user },
          { new: true }
        );
  
        return updatedUser;
      } catch (error) {
        throw new Error('Failed to update user');
      }
    },
  
    updateLibrary: async (parent, { libraryId, library }) => {
      try {
        const updatedLibrary = await Library.findByIdAndUpdate(
          libraryId,
          { $set: library },
          { new: true }
        );
  
        return updatedLibrary;
      } catch (error) {
        throw new Error('Failed to update library');
      }
    },
   },

    }


module.exports = resolvers