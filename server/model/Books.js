const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  seller: {
    type: String,
    required: true,
  },
  readMoreLink: {
    type: String,
    required: true,
  },
});

const Books = mongoose.model("Book", bookSchema);

module.exports = Books;
