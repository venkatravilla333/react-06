import React, { useEffect, useRef } from 'react'

function Input() {

  var inputRef = useRef()
  // console.log(inputRef)

  useEffect(() => {
    console.log('effect runs')
    inputRef.current.focus()
  }, [])

  var getValue = () => {
   alert(inputRef.current.value)
  }

  console.log('render')
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={getValue}>get value</button>
    </div>
  )
}

export default Input