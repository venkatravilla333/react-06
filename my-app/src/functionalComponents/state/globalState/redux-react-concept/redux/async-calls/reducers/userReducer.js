
let initialState = {
  loading: false,
  users: [],
  error: ''
}

export let userReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case 'FETCH_USER_REQUEST':
      return {
       
        loading: true,
        users: [],
        error: ''
      }
      break;
    case 'FETCH_USER_SUCCESS':
      return {
        
        loading: false,
        users: action.payload
      }
      break;
    case 'FETCH_USER_FAILURE':
      return {
       
        loading: false,
        users: [],
        error: action.payload
      }
      break;
    default:
      return state
      
 }
  
}