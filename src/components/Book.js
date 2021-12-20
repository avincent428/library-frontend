import React, { useState } from "react";
import Modal from "./Modal";
import axios from "axios";

function Book(props) {
  const [show, setShow] = useState(false);
  const [modalInfo, setModalInfo] = useState("");

  function handleShowItem(data) {
    setModalInfo(data);
  }

  function onClick(item) {
    setShow(true);
    handleShowItem(item);
  }

  return (
    <div>
      {props.filteredBooks.map((book, i) => {
        return (
          <div className="book" key={book._id}>
            <img src={book.image} alt={book.title} className="book-image" />
            <div className="book-info">
              <p>{book.title}</p>
              <p>{book.authors[0]}</p>
            </div>
            {book.available ? (
              <p className="available">available</p>
            ) : (
              <p className="checked-out">checked out</p>
            )}
            <div className="book-modal">
              <button onClick={() => onClick(book)}>More Info</button>
              <Modal
                onClose={() => setShow(false)}
                show={show}
                modalInfo={modalInfo}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Book;
