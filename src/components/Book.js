import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Title from "./Title";
import Pages from "./Pages";
import Filter from "./Filter";
import { Link } from "react-router-dom";

function Book(props) {
  useEffect(() => {
    getData();
  }, [props.searchString]);

  /* this function goes through the words and makes sure the search parameters
     only starts with the words, doesn't just contain the combination of letters
     I had to add the split string so that the search wouldn't stop after a space */
  function goThroughWords(words, str) {
    let splitWords = words.split(" ");
    let splitString = str.split(" ");
    for (let i = 0; i < splitWords.length; i++) {
      for (let j = 0; j < splitString.length; j++) {
        if (
          splitWords[i].startsWith(props.searchString) ||
          splitWords[i] === splitString[j]
        )
          return true;
      }
    }
  }

  function getData() {
    axios.get("http://localhost:8000/books").then((res) => {
      const bookData = res.data;
      props.setSearchString(props.searchString.toLowerCase());
      const tempBooks = bookData.filter((book) => {
        if (
          (book.title.toLowerCase().includes(props.searchString) &&
            goThroughWords(book.title.toLowerCase(), props.searchString)) ||
          (book.authors[0].toLowerCase().includes(props.searchString) &&
            goThroughWords(book.authors[0].toLowerCase(), props.searchString))
        )
          return true;
        else return false;
      });
      props.setBooks(tempBooks);
      props.setFilteredBooks(tempBooks);
    });
  }

  return (
    <div>
      <header>
        <Title />
        <Link to="administrative" className="no-link-decoration">
          <h3 className="admin">Administrative</h3>
        </Link>
      </header>

      <SearchBar
        getData={getData}
        searchString={props.searchString}
        setSearchString={props.setSearchString}
      />
      <section>
        <div className="aside">
          <Filter
            books={props.books}
            setFilteredBooks={props.setFilteredBooks}
          />
        </div>
        <div className="books-display">
          {props.filteredBooks.map((book) => {
            return (
              <Link
                to={`/books/${book._id}`}
                key={book._id}
                className="no-link-decoration"
              >
                <div className="book" key={book._id}>
                  <img
                    src={book.image}
                    alt={book.title}
                    className="book-image"
                  />
                  <div className="book-info">
                    <p>{book.title}</p>
                    <p>{book.authors[0]}</p>
                  </div>
                  {book.available ? (
                    <p className="available">Available</p>
                  ) : (
                    <p className="checked-out">Checked Out</p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <Pages />
    </div>
  );
}

export default Book;
