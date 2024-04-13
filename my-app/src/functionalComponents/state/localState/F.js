import React, {useState} from 'react'

function F(props) {
  // var [name, setName] = useState('sachin');

  console.log(props)
  return (
    <div>
      <h4>F com: Name: {props.name }</h4>
      <button >update name</button>
    </div>
  );
}

export default F