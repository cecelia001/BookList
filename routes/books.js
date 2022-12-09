var express = require('express');
var router = express.Router();
const db = require("../model/helper");

// GET all books
router.get('/', async function(req, res) {
  try {
    let result = await db ('SELECT * FROM books');
    let books = result.data;
    if (books.length === 0) {
      res.status(404).send({ error: "No books" });
    } else {
      res.send(books);
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
  let books = result.data;
  res.status(201).send(books);
} catch (err) {
  res.status(500).send({ error: err.message });
  console.log(err.message);
}
});

//DELETE book from list
router.delete('/:id', async function (req, res){
let id = req.params.id;

try {
  let result = await db(`SELECT * FROM books WHERE id=${id}`);
  if (result.data.length === 0) {
    res.status(404).send({ error: "Book not found" });
  } else {
    await db(`DELETE FROM books WHERE id=${id}`);
    let result = await db(`SELECT * FROM books`);
    let books = result.data;
    res.status(201).send(books);
  }
} catch (err) {
  res.status(500).send({ error: err.message });
}
});

//PATCH mark book as read
router.patch('/:id', async function (req, res){
  let id = req.params.id;
  let  done  = req.body;
  
  try {
    let result = await db(`SELECT * FROM books WHERE id=${id}`);
    if (result.data.length === 0) {
      res.status(404).send({ error: "Book not found" });
    } else {
      await db(`UPDATE books SET done=${done.done} WHERE id=${id}`);
      let result = await db(`SELECT * FROM books`);
      let books = result.data;
      res.status(201).send(books);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
  });

module.exports = router;
