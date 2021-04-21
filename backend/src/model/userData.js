const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/libraryapp', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    dob: Date,
    Favorites: Array,
    Books: Array,
    Reviews: [{_id: Number, review: String}]
});

var userData = mongoose.model('user', UserSchema); 
 
module.exports = userData;
