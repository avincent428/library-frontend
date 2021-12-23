import React, {useState} from 'react';
import axios from 'axios';

function AddBook({modalInfo, books, setModalInfo, showAdd, setBooks, onClose}) {
  
    if(!showAdd)
        return null

    function onClick(event) {
        axios.post(process.env.REACT_APP_API_URL + `books/`, modalInfo).then((res) => {
            const bookData = res.data;
            setBooks(books => [...books, bookData])
            event.preventDefault()
        })
    }

    return (
        <div className='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h4 className='modal-title'>Add a book by title</h4>
                </div>
                <div className='modal-body'>
                    Body
                </div>
                <div className='modal-footer'>
                    <form  >
                        <div>
                            <label id="title-label">
                                Title:
                            </label>
                            <input type="text" id="title-text-box" onChange={(event) => setModalInfo({...modalInfo, title: event.target.value})}></input>
                        </div>
                        <div>
                            <label id="author-label">
                                Author:
                            </label>
                            <input type="text" id="author-text-box" onChange={(event) => setModalInfo({...modalInfo, authors: event.target.value})}></input>
                        </div>
                        <div>
                            <label id="genre-label">
                                Genre:
                            </label>
                            <input type="text" id="genre-text-box" onChange={(event) => setModalInfo({...modalInfo, genre: event.target.value})}></input>
                        </div>
                        <div>
                            <label id="isbn-label">
                                ISBN:
                            </label>
                            <input type="text" id="isbn-text-box" onChange={(event) => setModalInfo({...modalInfo, isbn: event.target.value})}></input>
                        </div>
                        <div>
                            <label id="format-label">
                                Format:
                            </label>
                            <input type="text" id="format-text-box" onChange={(event) => setModalInfo({...modalInfo, format: event.target.value})}></input>
                        </div>
                        <div>
                            <label id="description-label">
                                Description:
                            </label>
                            <input type="text" id="description-text-box" onChange={(event) => setModalInfo({...modalInfo, description: event.target.value})}></input>
                        </div>
                        <div>
                            <label id="published-label">
                                Year Published:
                            </label>
                            <input type="text" id="published-text-box" onChange={(event) => setModalInfo({...modalInfo, published: event.target.value})}></input>
                        </div>
                        <div>
                            <label id="location-label">
                                Location:
                            </label>
                            <input type="text" id="location-text-box" onChange={(event) => setModalInfo({...modalInfo, location: event.target.value})}></input>
                        </div>
                        <div>
                            <label id="image-label">
                                Image URL:
                            </label>
                            <input type="text" id="image-text-box" onChange={(event) => setModalInfo({...modalInfo, image: event.target.value})}></input>
                        </div>
                        <div>
                            <label id="available-label">
                                Available:
                            </label>
                            <input type="checkbox" id="available-text-box" onChange={(event) => setModalInfo({...modalInfo, available: event.target.checked})}></input>
                        </div>
                        <button 
                            className='edit-info-button' 
                            type="submit" 
                            onClick={(event) => onClick(event)} 
                        >
                            Add Book
                        </button>
                    </form>
                    <button className='modal-button' onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default AddBook;