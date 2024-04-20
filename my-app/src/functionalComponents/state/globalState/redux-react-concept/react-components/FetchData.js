import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../redux/async-calls/actions/userActions'

function FetchData() {

  var dispatch = useDispatch()
  var userState = useSelector((state) => state.userReducer)
  console.log(userState)

  
  function apiCall() {
   dispatch(fetchUsers())
  }
  return (
    <div>
      <button onClick={apiCall}>Api com: Fetch users</button>
      <div>
        {
          userState.loading ? (<h3>Loading</h3>) : userState.error ? (<h4>{userState.error}</h4>) : (
            <div>
              {
                userState.users.map((obj) => {
                  return <h4>{obj.username}</h4>
                })
              }
            </div>
          )
        }
      </div>
    </div>
  )
}

export default FetchData