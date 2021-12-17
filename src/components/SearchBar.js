import React, { useState } from "react";
import axios from 'axios'

function SearchBar({ getData, books, setBooks, searchString, setSearchString, setTargetData, targetData }) {

  function handleSubmit(event) {
    event.preventDefault()
    getData()
  }

  function handleChange(event) {
    setSearchString(event.target.value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Search"
          type="text"
          onChange={handleChange}
          value={searchString}
        />
      {/* <button type="submit" >Enter </button> */}
      </form>
    </div>
  );
}

export default SearchBar;
