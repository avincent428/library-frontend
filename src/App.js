import Book from "./components/Book";
import Filter from "./components/Filter";
import SearchBar from "./components/SearchBar";
import Title from "./components/Title";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    getData();
  }, [searchString]);

  // function splitWords(sentence) {
  //   let words = sentence.split(" ")
  //   for (let i = 0; i < words.length; i++) {
  //     words[i] = words[i][0].toUpperCase() + words[i]
  //   }
  //   words.join(" ")
  // }

  function getData() {
    axios.get("http://localhost:8000/books").then((res) => {
      const bookData = res.data;
      setSearchString(searchString.toLowerCase());
      setBooks(
        bookData.filter((book) =>
          book.title.toLowerCase().includes(searchString)
        )
      );
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
      </main>
    </div>
  );
}

export default App;
