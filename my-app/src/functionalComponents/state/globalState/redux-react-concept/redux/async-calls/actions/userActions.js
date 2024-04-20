import axios from 'axios'

var fetchUserRequest = () => {
  return {
    type: 'FETCH_USER_REQUEST'
  }
}
var fetchUserSuccess = (users) => {
  return {
    type: 'FETCH_USER_SUCCESS',
    payload: users
  }
}
var fetchUserFailure = (err) => {
  return {
    type: 'FETCH_USER_FAILURE',
    payload: err
  }
}


export var fetchUsers = () => {
  return (dispatch) => { 
   dispatch(fetchUserRequest())
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(res.data)
       dispatch(fetchUserSuccess(res.data))
    })
      .catch((err) => {
        console.log(err)
       dispatch(fetchUserFailure(err.message))
    })

  }
}