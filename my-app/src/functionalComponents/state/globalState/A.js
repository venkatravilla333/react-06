import React, { useState } from 'react'
import B from './B'
import C from './C'
import axios from 'axios'

export let productsContent = React.createContext()
export let usersContent = React.createContext()
console.log(productsContent)
console.log(usersContent)


function A() {
  // var [name, setName] = useState('sara')
  var [posts, setPosts] = useState([])
  var [users, setUsers] = useState([])

  function getPosts() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
      setPosts(res.data)
    })
  }
  function getUsers() {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      setUsers(res.data);
    });
  }
  
  return (
    <div>
      <button onClick={getPosts}>A com GetPosts</button>
      <button onClick={getUsers}>A com GetUsers</button>
      <usersContent.Provider value={users}>
        <productsContent.Provider value={posts}>
          <B />
          <C />
        </productsContent.Provider>
      </usersContent.Provider>
    </div>
  );
}

export default A