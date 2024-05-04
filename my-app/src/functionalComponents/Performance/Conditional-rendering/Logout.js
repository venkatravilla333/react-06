import React from 'react'

function Logout(props) {
  console.log(props)
   var { data } = props;
   var [login, setLogin] = data;
  return (
    <button onClick={()=>setLogin(!login)}>Logout</button>
  )
}

export default Logout