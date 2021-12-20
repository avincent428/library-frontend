import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Modal(props) {
    const [checkedOut, setCheckedOut] = useState(false)
    const [editBookData, setEditBookData] = useState([])

    if (!props.show) {
        return null;
    }

    function handleChange(event) {
        // props.setBooks({...props.books[props.book], available: !event.target.checked})
        // props.setModalInfo({...props.modalInfo, available: !event.target.checked})
        console.log(event.target.checked)
        console.group(props.book)
        setEditBookData(!event.target.checked)
        // props.setBookDataFunction(event.target.checked)
        if (checkedOut === false)
            setCheckedOut(true)
        else
            setCheckedOut(false)
    }

    function onClick(event, id) {
        event.preventDefault()
        
        axios.put(`http://localhost:8000/books/${id}`, props.modalInfo).then((res) => {
        // axios.get(`http://localhost:8000/books/${id}`, props.modalInfo).then((res) => {
        const bookData = res.data;
        console.log(bookData)
        props.setBookDataFunction(({...props.books, available: editBookData}))
        // setEditBookData(bookData)
        console.log(bookData)
        
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
                            <button className='edit-info-button' type="submit" onClick={(event) => onClick(event, props.modalInfo._id)}>Edit</button>
                        </label>
                    </form>
                    <button className='modal-button' onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;