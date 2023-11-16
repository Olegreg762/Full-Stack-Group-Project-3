const {Schema, model} = require('mongoose');

const librarySchema = new Schema ({

});

const Library = model('Library', librarySchema);

module.exports = Library;