
const db = require('../config/connection');
const { Book, Library, User} = require('../models');
// const Book = require('../models/Book')
const cleanDB = require('./cleanDB');
const bookData = require('./bookData.json')
const libraryData= require('./libraryData.json')
const userData = require('./userData.json')

db.once('open', async () => {
     await cleanDB("Book", 'books');
     await cleanDB("User", 'users');
     await cleanDB("Library",'libraries')
    await User.insertMany(userData)
    await Library.insertMany(libraryData)
    await Book.insertMany(bookData)
    console.log("seeded")
    process.exit(0)
})


db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});
