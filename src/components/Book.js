import React from "react";

function Book(props) {
  return (
    <div className="book">
      <img
        src="http://books.google.com/books/content?id=KL2ONx6LTV0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
        alt="Book"
        className="book-image"
      />

      <div className="book-info">
        <p>The Lost Books Visual Edition</p>
        <p>Ted Dekker</p>
      </div>

      <p className="book-availability">available</p>
    </div>
  );
}

export default Book;
