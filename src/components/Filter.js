import React, { useState } from "react";

function Filter(props) {
  const [fantasyFilter, setFantasyFilter] = useState({ checked: false });
  const [juvFicFilter, setJuvFicFilter] = useState({ checked: true });
  const [ficFilter, setFicFilter] = useState({ checked: true });
  const [scifiFilter, setSciFiFilter] = useState({ checked: true });
  const [graphNovFilter, setGraphNovFilter] = useState({ checked: true });
  const [nonFicFilter, setNonFicFilter] = useState({ checked: true });
  const [mysteryFilter, setMysteryFilter] = useState({ checked: true });
  const [comicStripFilter, setComicStripFilter] = useState({ checked: true });

  const [available, setAvailable] = useState({
    checked: true,
    available: true,
  });

  const [checkedOut, setCheckedOut] = useState({
    checked: true,
    available: false,
  });

  function filterCheck() {
    return (
      fantasyFilter.checked ||
      juvFicFilter.checked ||
      ficFilter.checked ||
      scifiFilter.checked
    );
  }

  function handleGenreFilterClick(genre, genreFilter, setGenreFilter) {
    const checked = genreFilter.checked;
    setGenreFilter({ checked: !checked });
    if (genreFilter.checked === true) {
      let booksFiltered = props.books.filter((book) => book.genre === genre);
      props.setFilteredBooks(booksFiltered);
    }
    if (genreFilter.checked === false) {
      props.setFilteredBooks(props.books);
    }
  }

  function handleAvailabilityFilterClick(
    availabilityFilter,
    setAvailabilityFilter
  ) {
    const checked = availabilityFilter.checked;
    setAvailabilityFilter({ ...availabilityFilter, checked: !checked });
    if (availabilityFilter.checked === true) {
      let booksFiltered = props.books.filter(
        (book) => book.available === availabilityFilter.available
      );
      props.setFilteredBooks(booksFiltered);
    }
    if (availabilityFilter.checked === false) {
      props.setFilteredBooks(props.books);
    }
  }

  function createGenre(genre, genreFilter, setGenreFilter) {
    return (
      <label className="container">
        <input
          type="checkbox"
          onClick={() =>
            handleGenreFilterClick(genre, genreFilter, setGenreFilter)
          }
        />
        {genre}
      </label>
    );
  }

  function genreOptions() {
    return (
      <div className="options">
        {createGenre("Juvenile-Fiction", juvFicFilter, setJuvFicFilter)}
        <br />
        {createGenre("Fiction", ficFilter, setFicFilter)}
        <br />
        {createGenre("Science Fiction", scifiFilter, setSciFiFilter)}
        <br />
        {createGenre("Fantasy", fantasyFilter, setFantasyFilter)}
        <br />
        {createGenre("Graphic Novel", graphNovFilter, setGraphNovFilter)}
        <br />
        {createGenre("Non-Fiction", nonFicFilter, setNonFicFilter)}
        <br />
        {createGenre("Mystery", mysteryFilter, setMysteryFilter)}
        <br />
        {createGenre("Comic Strip", comicStripFilter, setComicStripFilter)}
      </div>
    );
  }

  function availabilityOptions() {
    return (
      <div className="options">
        <label className="container">
          <input
            type="checkbox"
            onClick={() =>
              handleAvailabilityFilterClick(available, setAvailable)
            }
          />
          Available
        </label>
        <br />
        <div className="options">
          <label className="container">
            <input
              type="checkbox"
              onClick={() =>
                handleAvailabilityFilterClick(checkedOut, setCheckedOut)
              }
            />
            Checked Out
          </label>
        </div>
      </div>
    );
  }

  return (
    <div className="filter">
      <h2 className="filter-title">Filter By:</h2>
      <br />
      <div className="genre-container">
        <p className="genre">Genre</p>
        {genreOptions()}
      </div>
      <p className="availability">Availability</p>
      {availabilityOptions()}
    </div>
  );
}

export default Filter;
