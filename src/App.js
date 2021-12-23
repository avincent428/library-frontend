import Book from "./components/Book";
import BookDetails from "./components/BookDetails";
import Filter from "./components/Filter";
import SearchBar from "./components/SearchBar";
import Title from "./components/Title";
import Pages from "./components/Pages";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Administrative from "./components/Administrative";

function App() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchString, setSearchString] = useState("");

  return (
    <div>
      <main>
        <Route
          path="/administrative"
          exact
          render={() => (
            <Administrative
              books={books}
              setBooks={setBooks}
              filteredBooks={filteredBooks}
              setFilteredBooks={setFilteredBooks}
              searchString={searchString}
              setSearchString={setSearchString}
            />
          )}
        ></Route>
        <Route
          path="/"
          exact
          render={() => (
            <Book
              books={books}
              setBooks={setBooks}
              filteredBooks={filteredBooks}
              setFilteredBooks={setFilteredBooks}
              searchString={searchString}
              setSearchString={setSearchString}
            />
          )}
        ></Route>

        <Route
          path="/books/:id"
          render={(routerProps) => <BookDetails match={routerProps.match} />}
        />
      </main>
    </div>
  );
}

export default App;
