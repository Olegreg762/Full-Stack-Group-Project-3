const {Schema, model} = require('mongoose');

const librarySchema = new Schema ({
    libraryname: {
        type: String,
        required: true,
        unique: true
    },
    libraryowner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    books: [{
        type: Schema.Types.ObjectId,
        ref: 'Book'
    }]

});

const Library = model('Library', librarySchema);

module.exports = Library;