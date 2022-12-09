import './App.css';
import React, { useEffect, useState } from "react";

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

  return (
    <div className="App">
      <h1> My Book List </h1>
    </div>
  );
}

export default App;
