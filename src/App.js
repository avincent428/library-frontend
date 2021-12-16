import Book from "./components/Book";
import Filter from "./components/Filter";
import SearchBar from "./components/SearchBar";
import Title from "./components/Title";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios.get("http://localhost:8000/books").then((res) => {
      const bookData = res.data;
      setBooks(bookData);
    });
  }
  return (
    <div>
      <header>
        <Title />
        <SearchBar />
      </header>

      <main>
        <section>
          <Filter />
          <Book books={books} />
        </section>
      </main>
    </div>
  );
}

export default App;
