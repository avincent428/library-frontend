import React from 'react';
import { useState, useEffect } from "react";

function BookDetails(props) { 

    const [book, setBook] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:8000/books/${props.match.params.id}`)
      .then(res=> res.json())
      .then(json => {
        setBook(json);
      })
      .catch(console.error);
    }, [props.match.params.id]);
    if (!book) return (<div>Loading</div>)
    
    return (
        <div className="book-details">
          <img
            src={book.image}
            alt={book.source}
          />
          <div className="details">
            <h2>Title: {book.title}</h2>
            {/* Author:<h2>{book.authors[0]}</h2> */}
            <h2>Genre: {book.genre}</h2>
            <h2>ISBN: {book.isbn}</h2>
            <h2>Library Location: {book.libraryLocation}</h2>
            <h2>Format: {book.format}</h2>
            <h2>Description: {book.description}</h2>
            <h2>Year Published: {book.published}</h2>
            <h2>Copyright: {book.copyright}</h2>
            <h2>Shopping Link: {book.shoppingLink}</h2>
            <h2>Subject: {book.subject}</h2>
          </div>
          <p className="book-availability">{book.availability}</p>
        </div>
    );

}

export default BookDetails;