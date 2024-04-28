import React from 'react'
import './style.css'
import ReactDOM from 'react-dom'

function Modal(props) {
  return ReactDOM.createPortal(
    <div className='modal-overlay'>
      <div className='modal-content'>
        <h3>This is modal heading</h3>
        <h4>This is modal body</h4>
        <h6>This is modal footer</h6>
        <button onClick={props.toggleModal}>close modal</button>
      </div>
    </div>,
    document.getElementById('portal-div')
  ); 
}

export default Modal