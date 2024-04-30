import React from 'react'


var obj = {
  name: 'sachin',
  age: 40
}

function Home() {
  return (
    <div>Home Component {JSON.stringify(obj)}</div>
  )
}

export default Home