import React, { useReducer, useRef, useState } from 'react'

function Store() {
  var normalValue = 0

  var [stateValue, setStatevalue] = useState(0)

  var refValue = useRef(0)
  
  var updateNormal = () => {
    normalValue++
    console.log(normalValue)
  }

  var updateState = () => {
    setStatevalue(stateValue + 1)
    console.log(stateValue)
  }

  var updateRef = () => {
    refValue.current++
    console.log(refValue.current)
  }

  console.log('render')
  return (
    <div>
      <h4>Normal value: {normalValue}</h4>
      <h4>State value: {stateValue}</h4>
      <h4>Ref value: {refValue.current}</h4>
      <button onClick={updateNormal}>update normal value</button>
      <button onClick={updateState}>update state value</button>
      <button onClick={updateRef}>update ref value</button>
    </div>
  )
}

export default Store