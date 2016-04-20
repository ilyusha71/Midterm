var mongoose = require('mongoose');
mongoose.connect('mongodb://ilyusha:kocmoc71@ds011271.mlab.com:11271/wakaka');
// mongoose.connect('mongodb://localhost:27017/person');
var Schema = mongoose.Schema;

// Define Schema
var personSchema = new Schema({
  character : {type: String} ,
  profession: {type: String} ,
  weapon    : String,
  novice    : String,
  expert    : String,
  master    : String
});

module.exports = mongoose.model('Person', personSchema);
