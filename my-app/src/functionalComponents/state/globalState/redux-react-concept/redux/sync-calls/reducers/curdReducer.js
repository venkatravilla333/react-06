
var initialState = {
  noOfCurds: 100
}

export var curdReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BUY_CURD':
      return {
        noOfCurds: state.noOfCurds - 1
      }
      break;
    default:
      return state
  }
}