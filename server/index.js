const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080; // Use the PORT environment variable if available
const teensBooks = require("./routes/teensBooks");
const data = require("../teens-books/src/pages/books.json");
const Book = require('./model/Books'); // Import your Mongoose model

dotenv.config();
mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected Successfully!");

// Create a new book document and save it to the database
    // data.forEach((item) => {
    //   const newBook = new Book(item);
    //   newBook.save()
    //     .then(() => {
    //       console.log('Book added to the database.');
    //     })
    //     .catch((err) => {
    //       console.error('Error adding book to the database:', err);
    //     });
    // });
  })
  .catch((err) => {
    console.error("DB Connection Error", err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Define your API routes with prefixes
app.use("/api/teensBooks", teensBooks);

// Error handling middleware (add your custom error handling logic)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
