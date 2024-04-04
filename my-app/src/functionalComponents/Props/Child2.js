import React from 'react'

function Child2(props) {
  console.log(props)
  return (
    <div> data from child1 : {props.x}</div>
  )
}

export default Child2