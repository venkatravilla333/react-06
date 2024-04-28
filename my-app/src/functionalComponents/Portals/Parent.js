import React, { useState } from 'react'
import Modal from './Modal'
import './style.css'

function Parent() {
  var [openModal, setOpenModel] = useState(false)
  
  var toggleModal = () => {
    setOpenModel(!openModal)
  }
  return (
    <div className='parent'>
      <button onClick={toggleModal}>Open Modal</button>
      {openModal && <Modal toggleModal={ toggleModal} />}
    </div>
  )
}

export default Parent