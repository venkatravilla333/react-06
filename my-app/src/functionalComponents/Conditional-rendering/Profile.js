import React from 'react'
import Logout from './Logout'

function Profile(props) {
  console.log(props)
  return (
    <div>
      <h4>Welcome surya</h4>
      <Logout data={props.data} />
    </div>
  )
}

export default Profile