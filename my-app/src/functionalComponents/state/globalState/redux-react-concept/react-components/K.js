import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { store } from '../redux/store'
import { buyCake } from '../redux/actions/cakeActions'
import { buyCurd } from '../redux/actions/curdActions'

function K() {

  var cakeState = useSelector((state) => state.cakeReducer)
  var curdState = useSelector((state) => state.curdReducer)
  // console.log(cakeState)
  // console.log(curdState)
  var dispatch = useDispatch()
  
  return (
    <div>
      <h4>K : no of cakes: {cakeState.noOfCakes}</h4>
      <button onClick={() => dispatch(buyCake())}>Buycake</button>
      <h4>K : no of curds: {curdState.noOfCurds}</h4>
      <button onClick={() => dispatch(buyCurd())}>Buycurd</button>
    </div>
  );
}

export default K