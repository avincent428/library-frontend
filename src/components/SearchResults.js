import React from 'react';

function SearchResults({ book }) {
    return (
        <div>
            <div>
                <img src={book.image} alt={book.title}/>
            </div>
            <div>
                {book.title}
            </div>
        </div>
    );
}

export default SearchResults;