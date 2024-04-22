import React, { useEffect, useState } from 'react'

function Browser() {
 var [x, setX]= useState(0)
  var [y, setY] = useState(0)

  var updateState = (e) => {
    console.log('update state')
   setX(e.clientX)
   setY(e.clientY)
 }
  useEffect(() => {
    console.log('effect called')
    window.addEventListener('mousemove', updateState)
    return () => {
       console.log('clean up')
      window.removeEventListener('mousemove', updateState)
    }
  }, [])
  return (
    <div>
      <h4>X: {x}</h4>
      <h4>Y: {y}</h4>
    </div>
  );
}

export default Browser