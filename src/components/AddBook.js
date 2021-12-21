import React, {useState} from 'react';
import axios from 'axios';

function AddBook({modalInfo, books, setModalInfo, showAdd, setBooks, onClose}) {
    const [textInput, setTextInput] = useState("")
    if(!showAdd)
        return null

    function handleChange(event) {
        setTextInput(event.target.value)
        setModalInfo(modalInfo => [...modalInfo, textInput]);
    }

    function onClick(event) {
        axios.post(`http://localhost:8000/books/`, books).then((res) => {
            const bookData = res.data;
            console.log(bookData.available)
            bookData.available = !bookData.available
            console.log(bookData.available)
            setBooks(books => [...books.title, textInput])
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
                    <form onChange={handleChange} >
                        <input type="text"></input>
                        <label>
                            Title
                            <button 
                                className='edit-info-button' 
                                type="submit" 
                                onClick={(event) => onClick(event, modalInfo._id)} 
                            >
                                Add Book
                            </button>
                        </label>
                    </form>
                    <button className='modal-button' onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default AddBook;