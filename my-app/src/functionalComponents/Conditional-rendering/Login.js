import React from 'react'

function Login(props) {
  var { data } = props
  var [login, setLogin] = data

  return (
    <div>
      <p>Welcome guest, please login</p>
      <button onClick={() => setLogin(!login)}>Login</button>
      
    </div>
  )
}

export default Login