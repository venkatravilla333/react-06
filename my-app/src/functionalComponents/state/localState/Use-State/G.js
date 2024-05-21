import React, { useState } from 'react'

function G(props) {
  console.log(props)
  // var x = 100
//  var [name, setName] = useState('sachin')

  // function updateX(x) {
  //   console.log(x)
  // }

  
  return (
    <div>
      {/* <h4>G com: X: {x} </h4>
      <button onClick={()=>updateX(x+1)}>update X</button> */}
      <h4>G com: Name: {props.name.title }</h4>
      {/* <button>update X</button> */}
    </div>
  );
}

export default G