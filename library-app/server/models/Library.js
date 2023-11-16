const {Schema, model} = require('mongoose');

const userSchema = require('./User');
const bookSchema = require('./Book');

const librarySchema = new Schema ({
    libraryowner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Library = model('Library', librarySchema);

module.exports = Library;