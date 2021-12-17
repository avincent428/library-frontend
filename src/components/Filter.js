import React from "react";

function Filter(props) {
  return (
    <div className="filter">
      <p>Genre</p>
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

export default Filter;
