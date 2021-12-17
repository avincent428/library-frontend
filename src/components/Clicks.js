import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Clicks(props) { 

    const [book, setBook] = useState([]);

    useEffect(() => {
      getData();
    }, []);

    function getData() {
        axios.get("http://localhost:8000/books").then((res) => {
          const bookData = res.data;
          setBook(bookData);
        });
      }
      if (!book) return (<div>loading</div>)
      
  return (
    <div className="book-details">
      <img
        src={book.image}
        alt={book.source}
      />
      <div className="details">
        <h2>{book.title}</h2>
        <h2>{book.author}</h2>
        <h2>{book.genre}</h2>
        <h2>{book.isbn}</h2>
        <h2>{book.libraryLocation}</h2>
        <h2>{book.format}</h2>
        <h2>{book.availability}</h2>
        <h2>{book.description}</h2>
        <h2>{book.published}</h2>
        <h2>{book.copyright}</h2>
        <h2>{book.shoppingLink}</h2>
        <h2>{book.subject}</h2>
      </div>
    </div>
  );
}

export default Clicks;