import React, { useState } from 'react'

function List() {
 var [users] = useState(['sachin', 'kohli', 'gill', 'rahul', 'dhoni', 'sami']);
  return (
    <div>
      <h3>List of users</h3>
      {
        users.map((user) => {
          return <h5>{user}</h5>
        })
      }
    </div>
  )
}

export default List