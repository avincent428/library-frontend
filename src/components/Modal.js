import React from 'react';

function Modal(props) {
    if (!props.show) {
        return null;
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
                    <button className='modal-button' onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;