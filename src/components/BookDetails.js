import React from 'react';
import { useState, useEffect } from "react";
import HomeBtn from "./HomeBtn"

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
      <>
        <div className="book-details">
          <img
            src={book.image}
            alt={book.source} 
          />
          <div className="details">
            <h2>Title: {book.title}</h2>
            {/* <h2>Author:{book.authors[0]}</h2> */}
            <h3>Genre: {book.genre}</h3>
            <h3>Description: {book.description}</h3>

            
            <h4>Library Location: {book.libraryLocation}</h4>
            <h4>Format: {book.format}</h4>
            <h4>ISBN: {book.isbn}</h4>
            <h4>Year Published: {book.published}</h4>
            <h4>Copyright: {book.copyright}</h4>
            <h4>Shopping Link: {book.shoppingLink}</h4>
            <h4>Subject: {book.subject}</h4>
          </div>
          <p className="book-availability">{book.availability}</p>
        </div>

        <HomeBtn />
      </>
    );

}

export default BookDetails;