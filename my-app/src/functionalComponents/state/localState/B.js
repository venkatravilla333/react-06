import React from 'react'
import D from './D'
import E from './E'

function B(props) {
  console.log(props)
  return (
    <div>
      <D />
      <E name={props.name} />
    </div>
  )
}

export default B