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
    <div className="p-5 text-center bg-image rounded-3" style={{
        backgroundImage: `url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')`}}
        >
      <div className="mask" style={{backgroundColor: `rgba(0, 0, 0, 0.6)`}}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-3">Heading</h1>
            <h4 className="mb-3">Subheading</h4>
            <a className="btn btn-outline-light btn-lg" href="#!" role="button">Call to action</a>
          </div>
        </div>
      </div>
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
