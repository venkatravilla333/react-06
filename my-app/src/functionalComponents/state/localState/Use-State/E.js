import React, { useState } from 'react'
import F from './F'
import G from './G'

function E(props) {
  console.log(props)

  // var [name, setName] = useState('sachin')
  return (
    <div>
      <F name={props.name} />
      <G name={props.name} />
    </div>
  );
}

export default E