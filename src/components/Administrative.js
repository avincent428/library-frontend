import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import SearchBar from "./SearchBar";
import axios from "axios";
import Title from "./Title";
import Pages from "./Pages";
import AddBook from "./AddBook";
import Filter from "./Filter";
import { Link } from "react-router-dom";

function Administrative(props) {
  const [show, setShow] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [modalInfo, setModalInfo] = useState("");

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
      // splitWords[i] = splitWords[i].split("").filter(letter => letter.match(/[a-z]/i) !== null).join("")
      // console.log(splitWords[i])
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

  function handleShowItem(data) {
    setModalInfo(data);
  }

  function onClick(item) {
    setShow(true);
    handleShowItem(item);
  }

  return (
    <div>
      <header>
        <Title />
        <Link to="/" className="no-link-decoration">
          <h3 className="user">User</h3>
        </Link>
      </header>

      <button className="add-book-button" onClick={() => setShowAdd(true)}>
        Add Book
      </button>
      <AddBook
        onClose={() => setShowAdd(false)}
        showAdd={showAdd}
        modalInfo={modalInfo}
        setModalInfo={setModalInfo}
        books={props.books}
        setBooks={props.setBooks}
      />

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
              <div
                className="book"
                key={book._id}
                onClick={() => onClick(book)}
              >
                <img src={book.image} alt={book.title} className="book-image" />
                <div className="book-info">
                  <p>{book.title}</p>
                  <p>{book.authors[0]}</p>
                </div>
                {book.available ? (
                  <p className="available">Available</p>
                ) : (
                  <p className="checked-out">Checked Out</p>
                )}
                <div className="book-modal"></div>
              </div>
            );
          })}
        </div>
      </section>
      <Modal
        onClose={() => setShow(false)}
        show={show}
        modalInfo={modalInfo}
        setModalInfo={setModalInfo}
        books={props.books}
        setBooks={props.setBooks}
      />
      <Pages />
    </div>
  );
}

export default Administrative;
