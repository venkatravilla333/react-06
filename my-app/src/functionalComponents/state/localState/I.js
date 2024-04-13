import React from 'react'
import J from './J'
import K from './K'

function I(props) {
  console.log(props)
  return (
    <div>
      <J />
      <K name={props.name} />
    </div>
  )
}

export default I