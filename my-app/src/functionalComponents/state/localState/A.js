import React, { useState } from 'react'
import B from './B'
import C from './C'



function A() {
var [name, setName] = useState('sachin')
  return (
    <div>
      <B name={name} />
      <C name={name} />
    </div>
  )
}

export default A