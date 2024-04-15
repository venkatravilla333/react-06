import React, {useState} from 'react'

function K(props) {
  // var [name, setName] = useState('sachin');
  return (
    <div>
      <h4>K com: name:  </h4>
      {
        props.name.map((obj) => {
          return <h5>{obj.title}</h5>
        })
      }
      
    </div>
  )
}

export default K