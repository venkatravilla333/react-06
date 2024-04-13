import React, {useState} from 'react'

function K(props) {
  console.log(props)
  // var [name, setName] = useState('sachin');
  return (
    <div>
      <h4>K com: name: {props.name} </h4>
    </div>
  )
}

export default K