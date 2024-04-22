import React, { useState } from 'react'
import Browser from './Browser'

function Container() {
 var [display, setDisplay] = useState(true)
  return (
    <div>
      <button onClick={()=>setDisplay(!display)}>Toggle</button>
      {display && <Browser/>}
    </div>
    
  )
}

export default Container