import React, { useState } from 'react'
import Login from './Login'
import Profile from './Profile'


//if else

// function Rendering() {

//   var [login, setLogin] = useState(false)
  
//   if (login) {
//     return <Profile data={[login, setLogin]} />
//   } else {
//     return <Login data={[login,setLogin]} />
//   }
//   // return (
    
//   //   <div>
//   //     <Login />
//   //     <Profile/>
//   //   </div>
//   // )
// }

// export default Rendering


// element variable

// function Rendering() {

//   var [login, setLogin] = useState(false)
  

//   var msg 

//   if (login) {
//     msg = <Profile data={[login, setLogin]} />
//   } else {
//     msg = <Login data={[login,setLogin]} />
//   }

//   return msg
  
// }

// export default Rendering


// ternary operator

// function Rendering() {

//   var [login, setLogin] = useState(false)

 
//   return (
    
//     <div>
//       {login ? <Profile data={[login, setLogin]} /> : <Login data={[login, setLogin]} />}
//     </div>
//   )
// }

// export default Rendering


function Rendering() {

  var [login, setLogin] = useState(true)

 
  return (
    
    <div>
      {login && <Profile data={[login, setLogin]} /> }
    </div>
  )
}

export default Rendering