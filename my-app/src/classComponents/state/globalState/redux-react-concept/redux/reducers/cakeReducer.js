
var initialState = {
  noOfCakes: 500
}

export var cakeReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'BUY_CAKE':
      return {
        noOfCakes: state.noOfCakes - 1
      }
      break;
    default:
    return  state
  }
}