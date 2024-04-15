import React, { useState } from 'react'
import B from './B'
import C from './C'
import axios from 'axios'



function A() {
  // var [name, setName] = useState('sachin')
  var [name, setName] = useState([])

  var getData = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log(res.data)
        setName(res.data)
    })
  }
  
  return (
    <div>
      <button onClick={getData}> A com Get data</button>
      <B name={name} />
      <C name={name} />
    </div>
  )
}

export default A