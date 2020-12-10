const router = require('express').Router();
const Book = require("./models/books-schema.js");

router.post("/api/books", (req, res) => {
  Book.create(req.body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch(err => {
      console.log(err);
      res.status(404).json(err);
    });
});

router.get("/api/books", (req, res) => {
  Book.find()
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

router.delete("/api/books/:bookId", (req, res) => {
  Book.deleteOne({ id: req.params.bookId })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

module.exports = router;
