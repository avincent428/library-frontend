import Book from "./components/Book";
import Filter from "./components/Filter";
import SearchBar from "./components/SearchBar";
import Title from "./components/Title";
import Pages from "./components/Pages";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [searchString, setSearchString] = useState('')

  useEffect(() => {
    getData();
  }, [searchString]);

  function getData() {
    axios.get("http://localhost:8000/books").then((res) => {
      const bookData = res.data;
      setSearchString(searchString.toLowerCase())
      setBooks(bookData.filter(function (book) {
        if (book.title.toLowerCase().includes(searchString) || book.authors[0].toLowerCase().includes(searchString))
          return true
        }))
    });
  }
  return (
    <div>
      <header>
        <Title />
        <SearchBar 
          getData={getData}
          searchString={searchString}
          setSearchString={setSearchString}
        />
      </header>

      <main>
        <section>
          <Filter />
          <Book books={books} />
        </section>

        <Pages />
      </main>
    </div>
  );
}

export default App;
