import React, { useEffect, useState } from "react";
import BookTable from "./components/BookTable"
import AddBookForm from "./components/AddBookForm"
import './App.css';

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
            done: 0,
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
    headers: { "content-Type" : "application/json" },
    body: JSON.stringify({
        done: 1,
      })
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
        <div className="jumbotron">
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-4"/>
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
        </div>
        <AddBookForm addBookCb={addBook}/>
        <BookTable books={books} deleteBookCb={deleteBook} completeBookCb={completeBook} />
      <div className ="endtag">
        <h3> Created by Cecelia Fowler.</h3>
      </div>
        
    </div>
  );
}

export default App;
