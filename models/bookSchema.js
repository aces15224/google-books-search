const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  _id: { 
    type: String 
  },
  title: { 
      type: String, 
      required: true 
    },
  authors: {
      type: Array, 
      required: true
    },
  description: String,
  image: {
      type: String, 
      trim: true
    },
  link: {
      type: String, 
      trim: true
    }
// ,
//   date: {
//        type: Date,
//        default: Date.now 
//     }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
