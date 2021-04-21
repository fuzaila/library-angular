const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/libraryapp', { useNewUrlParser: true, useUnifiedTopology: true });
const Schema = mongoose.Schema;

var NewAuthorSchema = new Schema({
    name : String,
    genre : String,
    country : String,
    image : String
});

var authorData = mongoose.model('author', NewAuthorSchema);           //UserData is the model and NewBookData is the schema

module.exports = authorData;