const db = require('../config/connection');
const { Book, Library, User} = require('../models');
const cleanDB = require('./cleanDB');
const bookData = require('./bookData.json')

db.once('open', async () => {
     await cleanDB("Book", 'books');

    await Book.insertMany(bookData)
    console.log("seeded")
    process.exit(0)
})