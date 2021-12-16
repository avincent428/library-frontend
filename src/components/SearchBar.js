import React, { useState } from "react";

function SearchBar(props) {
  const [searchString, setSearchString] = useState([])
  const [books, setBooks] = useState()

  function handleSubmit(event) {
    event.preventDefault()
    // call the api
  }

  function handleChange(event) {
    setSearchString(event.target.value)
  }
  return (
    <div>
      <input 
        placeholder="Search"
        type="text"
        onChange={handleChange}
        value={searchString}
      />
      <button type="submit">Enter </button>
      {/* {books.map(book => (
        <SearchResults
           book={book}
        />
      ))} */}
    </div>
  );
}

export default SearchBar;
