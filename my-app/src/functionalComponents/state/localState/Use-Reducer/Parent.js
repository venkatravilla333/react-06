import React, { useReducer } from 'react'




function Parent() {

  var initialState = {
    count1: 0,
    count2: 100,
    count3: 1000
  }
  
  var reducer = (state= initialState, action) => {
    switch (action.type) {
      // case 'INCREASE1':
      //   return {...state, count1: state.count1 + action.value}
      //   break;
      // case 'DECREASE1':
      //   return {...state, count1: state.count1 - action.value };
      //   break;
      // case 'RESET1':
      //   return initialState
        // break;
      // case 'INCREASE2':
      //   return {...state, count2: state.count2 + action.value}
      //   break;
      // case 'DECREASE2':
      //   return {...state, count2: state.count2 - action.value };
      //   break;
      // case 'RESET2':
      //   return initialState
      //   break;
      case 'INCREASE':
        return {
          count1: state.count1 + action.value,
          count2: state.count2 + action.value,
          count3: state.count3 + action.value
        }
        break;
      case 'DECREASE':
        return {
          count1: state.count1 - action.value, 
          count2: state.count2 - action.value,
          count3: state.count3 - action.value
        };
        break;
      case 'RESET':
        return initialState

      
      default:
        return initialState
    }
  }

  var [state1, dispatch1] = useReducer(reducer, initialState)
  var [state2, dispatch2] = useReducer(reducer, initialState)
  var [state3, dispatch3] = useReducer(reducer, initialState)

  // console.log(count)
  // console.log(dispatch)
  return (
    <div>
      <h4>Count1: {state1.count1}</h4>
      <h4>Count2: {state2.count2}</h4>
      <h4>Count3: {state3.count3}</h4>
      {/* <button onClick={() => dispatch({type: 'INCREASE1'})}>Increase1</button>
      <button onClick={() => dispatch({ type: 'DECREASE1' })}>Decrease1</button>
      <button onClick={() => dispatch({ type: 'RESET1' })}>Reset1</button>
      <button onClick={() => dispatch({type: 'INCREASE2'})}>Increase2</button>
      <button onClick={() => dispatch({ type: 'DECREASE2' })}>Decrease2</button>
      <button onClick={() => dispatch({ type: 'RESET2' })}>Reset2</button>

      <button onClick={() => dispatch({type: 'INCREASE1', value:5})}>Increase1 by 5</button>
      <button onClick={() => dispatch({ type: 'DECREASE1', value:5})}>Decrease1 by 5</button>
      <button onClick={() => dispatch({ type: 'RESET1' })}>Reset1 by 5</button>
      <button onClick={() => dispatch({type: 'INCREASE2', value:10})}>Increase2 by 10</button>
      <button onClick={() => dispatch({ type: 'DECREASE2', value:10})}>Decrease2 by 10</button>
      <button onClick={() => dispatch({ type: 'RESET2' })}>Reset2 by 10</button> */}
      <button onClick={()=>dispatch1({type: 'INCREASE', value: 5})}>increase1</button>
      <button onClick={()=>dispatch1({type: 'DECREASE', value: 5})}>decrease1</button>
      <button onClick={()=>dispatch1({type: 'RESET', value: 5})}>reset1</button>
      <button onClick={()=>dispatch2({type: 'INCREASE', value: 10})}>increase2</button>
      <button onClick={()=>dispatch2({type: 'DECREASE', value: 10})}>decrease2</button>
      <button onClick={()=>dispatch2({type: 'RESET', value: 10})}>reset2</button>
      <button onClick={()=>dispatch3({type: 'INCREASE', value: 10})}>increase3</button>
      <button onClick={()=>dispatch3({type: 'DECREASE', value: 10})}>decrease3</button>
      <button onClick={()=>dispatch3({type: 'RESET', value: 10})}>reset3</button>
    </div>
  )
}

export default Parent