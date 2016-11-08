var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
  description: {
    type: String,
    required: true
  }
});

/* This creates a mongoose database connection
 with a pre-defined schema for adding data */
var Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;
