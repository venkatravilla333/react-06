import React, { useContext } from 'react'
import { productsContent, usersContent } from './A'

function K() {
  // var posts = productsContent._currentValue
  // console.log(posts)
  var posts = useContext(productsContent)
  var users = useContext(usersContent)
  console.log(posts)
  return (
    <div>
      <h3>K com: Posts</h3>
      {posts.map((obj) => {
        return <h5>{obj.title}</h5>;
      })}
      <h3>K com: Users</h3>
      {
        users.map((obj) => {
          return <h5>{obj.name}</h5>
        })
      }
    </div>
  );
}

export default K