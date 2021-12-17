import React from "react";
import { useState } from "react/cjs/react.development";

function Filter(props) {
  const [toggle, setToggle] = useState({ open: false });

  function handleClick() {
    const open = toggle.open;
    setToggle({ open: !open });
  }

  function genreOptions() {
    return (
      <div className="genre-options">
        <label className="container">
          <input type="checkbox" />
          Juvenile-Fiction
        </label>
        <br />
        <label className="container">
          <input type="checkbox" />
          Fiction
        </label>
        <br />
        <label className="container">
          <input type="checkbox" />
          Science Fiction
        </label>
        <br />
        <label className="container">
          <input type="checkbox" />
          Fantasy
        </label>
      </div>
    );
  }

  return (
    <div className="filter">
      Filters:
      <br />
      <p className="genre-container" onClick={handleClick}>
        Genre
      </p>
      {toggle.open ? genreOptions() : null}
    </div>
  );
}

export default Filter;
