import React from 'react'

function VoteRight(props) {
  if (props.age < 18) {
    throw new Error('age below 18')
  }

  return (
    <div>
      <h4>Age: {props.age}</h4>
    </div>
  )
}

export default VoteRight