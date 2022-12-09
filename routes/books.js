var express = require('express');
var router = express.Router();
const db = require("../model/helper");

// GET all books
router.get('/', async function(req, res) {
  try {
    let result = await db ('SELECT * FROM books');
    let bookList = result.data;
    if (bookList.length === 0) {
      res.status(404).send({ error: "No books" });
    } else {
      res.send(bookList);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// ADD new book
router.post('/', async function (req,res){
let { title, author } = req.body;

let sql = `
  INSERT INTO books (title, author)
  VALUES ('${title}', '${author}')
`;

try {
  await db(sql);
  let result = await db ('SELECT * FROM books');
  let bookList = result.data;
  res.status(201).send(bookList);
} catch (err) {
  res.status(500).send({ error: err.message });
  console.log(err.message);
}
});

module.exports = router;
