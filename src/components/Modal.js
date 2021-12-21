import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Modal(props) {
    if (!props.show) {
        return null;
    }

    function handleChange(event) {
        console.log(event.target.checked);
        console.log(props.bookIndex);
        if (props.modalInfo.available)
            props.setModalInfo({...props.modalInfo, available: !event.target.checked});
        else
            props.setModalInfo({...props.modalInfo, available: event.target.checked}); // this line seems to be key, event.target.checked
    }

    function onClick(event, id) {
        axios.put(`http://localhost:8000/books/${id}`, props.modalInfo).then((res) => {
            const bookData = res.data;
            console.log(bookData.available)
            bookData.available = !bookData.available
            console.log(bookData.available)
            props.setBooks({...props.books, available: props.modalInfo})
            event.preventDefault()
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
                    <form onChange={handleChange} >
                        <input type="checkbox"></input>
                        <label>
                            Checked Out / In
                            <button 
                                className='edit-info-button' 
                                type="submit" 
                                onClick={(event) => onClick(event, props.modalInfo._id)} 
                            >
                                Edit
                            </button>
                        </label>
                    </form>
                    <button className='modal-button' onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;