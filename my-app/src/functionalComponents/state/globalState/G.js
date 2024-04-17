import React, { useContext } from 'react'
import { nameContent, todosContent } from './A'
import axios from 'axios'
function G() {
  //  var name =  nameContent._currentValue

  // var name = useContext(nameContent)
  var [todos, setTodos] = useContext(todosContent)
  
  function getTodos() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        console.log(res.data)
        setTodos(res.data)
    })
}
  
  return (
    <div>G com:
      <button onClick={getTodos}>get todos data</button>
    </div>
  )
}

export default G