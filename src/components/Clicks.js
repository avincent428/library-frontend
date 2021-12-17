import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Clicks(props) {

    const [book, setBook] = useState([]);

    useEffect(() => {
      fetch()
  .then(res => res.json())
  .then(json => {
      setBook(json);
  })
  .catch(console.error);
  }, [props.match.params.id]);
  if (!book) return (<div>loading</div>)

  return (
    <div>
      <section className='book-container'>
        
      </section>
    </div>
    )
}