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
            {book.available 
            ? <p className="book-availability">available</p> 
            : <p className="book-availability">checked out</p>
            }
          </div>
        );
      })}
    </div>
  );
}

export default Book;
