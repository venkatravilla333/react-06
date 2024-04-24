import React, { useState } from 'react'
import Child from './Child'
function Parent() {
  var [count, setCount] = useState(0)
  
  return (
    <div>
      <Child count={count} />
    </div>
  )
}

export default Parent