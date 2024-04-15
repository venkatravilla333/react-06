import React, { useContext } from 'react'
import { nameContent } from './A'

function K() {
  var posts = nameContent._currentValue
  console.log(posts)
  var posts = useContext(nameContent)
  console.log(posts)
  return (
    <div>K com name:
      {
        posts.map((obj) => {
          return <h5>{obj.title}</h5>
        })
      }
    </div>
  )
}

export default K