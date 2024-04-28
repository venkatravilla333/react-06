import React, { useEffect, useRef, useState } from 'react'

function Refervalue() {
  var [timer, setTimer] = useState(0)
  var timerValue = useRef()


  useEffect(() => {
   timerValue.current = setInterval(() => {
      setTimer(timer+1)
    }, 1000)
    return () => {
      clearInterval(timerValue.current)
    }
  })
  return (
    <div>
      <h4>Timer: {timer}</h4>
      <button onClick={()=>clearInterval(timerValue.current)}>Clear Timer</button>
    </div>
  )
}

export default Refervalue