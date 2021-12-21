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

  return (
    <div>
       <main>
        <section>
        </section>
        <Route path="/administrative" exact render={() => <Administrative books={books} setBooks={setBooks} searchString={searchString} setSearchString={setSearchString}/>}></Route>
        <Route path="/user" exact render={() => <Book books={books} setBooks={setBooks} searchString={searchString} setSearchString={setSearchString}/>}></Route>
        
      </main>
    </div>
  );
}

export default App;
