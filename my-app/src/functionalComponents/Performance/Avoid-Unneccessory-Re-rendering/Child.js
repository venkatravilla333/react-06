import React from 'react'

function Child(props) {
  // console.log(props)
  console.log('child render')
  return (
    <div>Child: {props.count}</div>
  )
}

export default React.memo(Child)