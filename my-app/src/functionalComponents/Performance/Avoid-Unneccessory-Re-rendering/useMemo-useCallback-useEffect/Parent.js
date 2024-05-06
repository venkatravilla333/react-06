import React, { useEffect, useMemo, useRef, useState } from 'react'
import axios from 'axios'
function Parent() {
  var [posts, setPosts] = useState([])
  
  console.log('render')
  useEffect(() => {
    console.log('effect called')
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
      setPosts(res.data)
    })

  }, [])

  var obj = useRef(100)
  console.log(obj.current, 'ref runs')

  useMemo(() => {
    console.log('useMemo runs')
  })
  return (
    <div>
      {
        posts.map((post) => {
          return <h5 key={post.id}>{post.title}</h5>
        })
      }
    </div>
  )
}

export default Parent