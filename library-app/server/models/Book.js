const {Schema, model} = require('mongoose');

const bookSchema = new Schema ({

});

const Book = model('Book', bookSchema);

module.exports = Book;