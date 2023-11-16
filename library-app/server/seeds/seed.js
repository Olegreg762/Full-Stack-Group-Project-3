const mongoose = require('mongoose');
// const { Book, Library, User } = require('../models');
const Book = require('../models/Book')
const cleanDB = require('./cleanDB');
const bookData = require('./bookData.json');
console.log(bookData);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/CHLOE', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', async () => {
  await cleanDB("Book", 'books');

  await Book.insertMany(bookData);
  console.log("seeded");
  process.exit(0);
});

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});
