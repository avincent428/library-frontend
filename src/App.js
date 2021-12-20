import Book from "./components/Book";
import Filter from "./components/Filter";
import SearchBar from "./components/SearchBar";
import Title from "./components/Title";
import Pages from "./components/Pages";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Route } from 'react-router-dom'
import Administrative from "./components/Administrative";

function App() {
  const [books, setBooks] = useState([]);
  const [searchString, setSearchString] = useState("");

  // useEffect(() => {
  //   getData();
  // }, [searchString]);

  // /* this function goes through the words and makes sure the search parameters
  //    only starts with the words, doesn't just contain the combination of letters
  //    I had to add the split string so that the search wouldn't stop after a space */
  // function goThroughWords(words, str) {
  //   let splitWords = words.split(" ");
  //   let splitString = str.split(" ");
  //   for (let i = 0; i < splitWords.length; i++) {
  //     for (let j = 0; j < splitString.length; j++) {
  //       if (splitWords[i].startsWith(searchString) || splitWords[i] === splitString[j]) 
  //         return true;
  //     }

  //   }
  // }

  // function getData() {
  //   axios.get("http://localhost:8000/books").then((res) => {
  //     const bookData = res.data;
  //     setSearchString(searchString.toLowerCase());
  //     setBooks(bookData.filter((book) => {
  //       if ((book.title.toLowerCase().includes(searchString) && goThroughWords(book.title.toLowerCase(), searchString)) || (book.authors[0].toLowerCase().includes(searchString) && goThroughWords(book.authors[0].toLowerCase(), searchString)))
  //         return true;
  //       else
  //         return false;
  //       }))
  //   });
  // }
  
  return (
    <div>
       <main>
        <section>
        </section>
        <Route path="/administrative" exact render={() => <Administrative books={books} setBooks={setBooks} searchString={searchString} setSearchString={setSearchString}/>}></Route>
        <Route path="/user" exact render={() => <Book books={books} setBooks={setBooks} searchString={searchString} setSearchString={setSearchString}/>}></Route>
        <Pages />
      </main>
    </div>
  );
}

export default App;
