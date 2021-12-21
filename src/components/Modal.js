import React from 'react';
import axios from 'axios';

function Modal(props) {
    if (!props.show) {
        return null;
    }

    function editBookInfo(event, id) {
        axios.put(`http://localhost:8000/books/${id}`, props.modalInfo).then((res) => {
            const bookData = res.data;
            props.setBooks({...props.books, bookData});
            event.preventDefault();
        })
    }

    function deleteBook(event, id) {
        axios.delete(`http://localhost:8000/books/${id}`).then((res) => {
            const bookData = res.data;
            props.setBooks(bookData);
            event.preventDefault();
        })
    }
      
    return (
        <div className='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h4 className='modal-title'>{props.modalInfo.title}</h4>
                </div>
                <div className='modal-body'>
                    {props.modalInfo.description}
                    <div className='location-div'>
                        Location: {props.modalInfo.location}
                    </div>
                </div>
                <div className='modal-footer'>
                    <form>
                        <div>
                            <label id="edit-title-label">Edit Title:</label>
                            <input type="text" id="edit-title-input" onChange={(event) => props.setModalInfo({...props.modalInfo, title: event.target.value})}></input>
                        </div>
                        <div>
                            <label id="edit-author-label">Edit Author:</label>
                            <input type="text" id="edit-author-input" onChange={(event) => props.setModalInfo({...props.modalInfo, authors: event.target.value})}></input>
                        </div>
                        <div>
                            <label id="edit-genre-label">Edit Genre:</label>
                            <input type="text" id="edit-genre-input" onChange={(event) => props.setModalInfo({...props.modalInfo, genre: event.target.value})}></input>
                        </div>
                        <div>
                            <label id="edit-published-label">Edit Year Published:</label>
                            <input type="text" id="edit-published-input" onChange={(event) => props.setModalInfo({...props.modalInfo, published: event.target.value})}></input>
                        </div>
                        <div>
                            <label id="edit-isbn-label">Edit ISBN:</label>
                            <input type="text" id="edit-isbn-input" onChange={(event) => props.setModalInfo({...props.modalInfo, isbn: event.target.value})}></input>
                        </div>
                        <div>
                            <label id="edit-format-label">Edit Format:</label>
                            <input type="text" id="edit-format-input" onChange={(event) => props.setModalInfo({...props.modalInfo, format: event.target.value})}></input>
                        </div>
                        <div>
                            <label id="edit-description-label">Edit Description:</label>
                            <textarea rows="5" columns="1" id="edit-description-input" onChange={(event) => props.setModalInfo({...props.modalInfo, description: event.target.value})}></textarea>
                        </div>
                        <div>
                            <label id="edit-location-label">Edit Location:</label>
                            <input type="text" id="edit-location-input" onChange={(event) => props.setModalInfo({...props.modalInfo, location: event.target.value})}></input>
                        </div>
                        <div>
                            <label id="edit-image-label">Edit Image URL:</label>
                            <input type="text" id="edit-image-input" onChange={(event) => props.setModalInfo({...props.modalInfo, image: event.target.value})}></input>
                        </div>
                        <div>
                            <input type="checkbox" onChange={(event) => props.setModalInfo({...props.modalInfo, available: !event.target.checked})} checked={!props.modalInfo.available}></input>
                            <label>
                                Checked Out
                            </label>
                        </div>
                        <button 
                            className='edit-info-button' 
                            type="submit" 
                            onClick={(event) => editBookInfo(event, props.modalInfo._id)} 
                        >
                            Edit
                        </button>
                        <button 
                            onClick={(event) => deleteBook(event, props.modalInfo._id)}
                        >
                            Delete Book
                        </button>
                    </form>
                    <button className='modal-button' onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;