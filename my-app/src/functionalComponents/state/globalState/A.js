import React, { useState } from 'react'
import B from './B'
import C from './C'
import axios from 'axios'

export let nameContent = React.createContext()
console.log(nameContent)


function A() {
  // var [name, setName] = useState('sara')
  var [posts, setPosts] = useState([])

  function getData() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
      setPosts(res.data)
    })
  }
  
  return (
    <div>
      <button onClick={getData}>A com Getdata</button>
      <nameContent.Provider value={posts}>
      <B />
      <C />
      </nameContent.Provider>
    </div>
  )
}

export default A