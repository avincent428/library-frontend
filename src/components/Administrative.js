import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import SearchBar from './SearchBar';
import axios from 'axios';
import Title from './Title';

function Administrative(props) {
    const [show, setShow] = useState(false);
    const [modalInfo, setModalInfo] = useState("");

    useEffect(() => {
        getData();
      }, [props.searchString]);

     /* this function goes through the words and makes sure the search parameters
     only starts with the words, doesn't just contain the combination of letters
     I had to add the split string so that the search wouldn't stop after a space */
  function goThroughWords(words, str) {
    let splitWords = words.split(" ");
    let splitString = str.split(" ");
    for (let i = 0; i < splitWords.length; i++) {
      for (let j = 0; j < splitString.length; j++) {
        if (splitWords[i].startsWith(props.searchString) || splitWords[i] === splitString[j]) 
          return true;
      }

    }
  }

    function getData() {
        axios.get("http://localhost:8000/books").then((res) => {
          const bookData = res.data;
          props.setSearchString(props.searchString.toLowerCase());
          props.setBooks(bookData.filter((book) => {
            if ((book.title.toLowerCase().includes(props.searchString) && goThroughWords(book.title.toLowerCase(), props.searchString)) || (book.authors[0].toLowerCase().includes(props.searchString) && goThroughWords(book.authors[0].toLowerCase(), props.searchString)))
              return true;
            else
              return false;
            }))
        });
      }

    function handleShowItem(data) {
      setModalInfo(data);
    }
  
    function onClick(item) {
      setShow(true);
      handleShowItem(item);
    }

    function setBookDataFunction(updatedData) {
        props.setBooks({...updatedData, available: !updatedData.available})
    }
    return (
        <div>
            <header>
                <Title />
                <SearchBar
                    getData={getData}
                    searchString={props.searchString}
                    setSearchString={props.setSearchString}
                />
            </header>
            {props.books.map(book => {
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
                        <div className="book-modal">
                            <button onClick={() => onClick(book)}>More Info</button>
                            <Modal onClose={() => setShow(false)} show={show} modalInfo={modalInfo} setModalInfo={setModalInfo} books={props.books} setBooks={props.setBooks} setBookDataFunction={setBookDataFunction} book={book}/>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Administrative;