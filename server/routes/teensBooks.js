const express = require("express");
const router = express.Router();
const Book = require("../model/Books");

router.get("/books", async (req, res) => {
  try {
    const books = await Book.find(); // Remove the .limit(10) method to get all books
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch books", message: err.message });
  }
});

module.exports = router;

