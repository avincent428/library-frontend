import axios from "axios";
import React, { useState, useEffect } from "react";

function Book(props) {
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
      {books.map((book) => {
        return (
          <div className="book" key={book._id}>
            <img src={book.image} alt={book.title} className="book-image" />
            <div className="book-info">
              <p>{book.title}</p>
              <p>{book.authors[0]}</p>
            </div>
            <p className="book-availability">available</p>
          </div>
        );
      })}
    </div>
  );
}

export default Book;
