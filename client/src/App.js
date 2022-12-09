import './App.css';
import React, { useEffect, useState } from "react";
import WantToRead from "./components/WantToRead"
import AddBookForm from "./components/AddBookForm"

function App() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    try {
      let response = await fetch ('/books');
      if (response.ok) {
        let data = await response.json();
        setBooks(data)
      } else {
        console.log(`server error: ${response.status}: ${response.statusText}`);
      }
    } catch (err) {
      console.log(`network error: ${err.message}`);
    }
  }

  async function addBook(formData) {
    let options = {
        method: "POST",
        headers: { "content-Type" : "application/json" },
        body: JSON.stringify({
            title: formData.title,
            author: formData.author,
        })
    };

    try{      
    let response = await fetch("/books", options);
    if (response.ok) {
      let newBook = await response.json();
      getBooks(newBook)
    } else {
      console.log(`Server error: ${response.status} ${response.statusText}`);
    }
  } catch (err) {
    console.log(`Network error: ${err.message}`);
  }
}

async function deleteBook(id) {
  let options = {
    method: "DELETE",
    }

  try {
    let response = await fetch (`/books/${id}`, options);
    if (response.ok) {
      let data = await response.json();
      setBooks(data)
    } else {
      console.log(`server error: ${response.status}: ${response.statusText}`);
    }
  } catch (err) {
    console.log(`network error: ${err.message}`);
  }
}

async function completeBook(id) {
  let options = {
    method: "PATCH",
    }

  try {
    let response = await fetch (`/books/${id}`, options);
    if (response.ok) {
      let data = await response.json();
      setBooks(data)
    } else {
      console.log(`server error: ${response.status}: ${response.statusText}`);
    }
  } catch (err) {
    console.log(`network error: ${err.message}`);
  }
}

  return (
    <div className="App">
        <h1> My Book List </h1>
        <h2> Keep track of what books you want to read! </h2>
        <AddBookForm books={books} addBookCb={addBook}/>
        <WantToRead books={books} deleteBookCb={deleteBook} completeBookCb={completeBook} />
    </div>
  );
}

export default App;
