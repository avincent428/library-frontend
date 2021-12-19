function Book(props) {
  
  return (
    <div>
      {props.books.map((book) => {
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
