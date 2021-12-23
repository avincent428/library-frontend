import React, { useState } from "react";

function SearchBar({ searchString, setSearchString }) {
  function handleChange(event) {
    setSearchString(event.target.value);
  }
  return (
    <div>
      <form>
        <input
          className="search-bar"
          placeholder="Search"
          type="text"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default SearchBar;
