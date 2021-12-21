import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Modal(props) {
    if (!props.show) {
        return null;
    }

    function handleChange(event) {
        if (props.modalInfo.available)
            props.setModalInfo({...props.modalInfo, available: !event.target.checked});
        else
            props.setModalInfo({...props.modalInfo, available: event.target.checked}); // this line seems to be key, event.target.checked
    }

    function onClick(event, id) {
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
                        <input type="checkbox" onChange={handleChange}></input>
                        <label>
                            Checked Out / In
                        </label>
                        <div>
                            <label>Edit Title:</label>
                            <input type="text" onChange={(event) => props.setModalInfo({...props.modalInfo, title: event.target.value})}></input>
                        </div>
                        <div>
                            <label>Edit Author:</label>
                            <input type="text" onChange={(event) => props.setModalInfo({...props.modalInfo, authors: event.target.value})}></input>
                        </div>
                        <div>
                            <label>Edit Genre:</label>
                            <input type="text" onChange={(event) => props.setModalInfo({...props.modalInfo, genre: event.target.value})}></input>
                        </div>
                        <div>
                            <label>Edit Year Published:</label>
                            <input type="text" onChange={(event) => props.setModalInfo({...props.modalInfo, published: event.target.value})}></input>
                        </div>
                        <div>
                            <label>Edit ISBN:</label>
                            <input type="text" onChange={(event) => props.setModalInfo({...props.modalInfo, isbn: event.target.value})}></input>
                        </div>
                        <div>
                            <label>Edit Format:</label>
                            <input type="text" onChange={(event) => props.setModalInfo({...props.modalInfo, format: event.target.value})}></input>
                        </div>
                        <div>
                            <label>Edit Description:</label>
                            <textarea rows="5" columns="1" onChange={(event) => props.setModalInfo({...props.modalInfo, description: event.target.value})}></textarea>
                        </div>
                        <div>
                            <label>Edit Location:</label>
                            <input type="text" onChange={(event) => props.setModalInfo({...props.modalInfo, location: event.target.value})}></input>
                        </div>
                        <div>
                            <label>Edit Image URL:</label>
                            <input type="text" onChange={(event) => props.setModalInfo({...props.modalInfo, image: event.target.value})}></input>
                        </div>
                        <button 
                            className='edit-info-button' 
                            type="submit" 
                            onClick={(event) => onClick(event, props.modalInfo._id)} 
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