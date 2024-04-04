import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function Parent() {
  // var data = 'sachin'
  var [x, setX] = useState(100)
  
  function test(data) {
    console.log(data)
    setX(data)
  }
  return (
    <div>
      <h3>Num: {x}</h3>
      <Child1 test={test} />
      <Child2 x={x} />
     
    </div>
  )
}

export default Parent