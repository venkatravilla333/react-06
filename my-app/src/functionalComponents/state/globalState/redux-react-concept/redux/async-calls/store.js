import {applyMiddleware, combineReducers, createStore} from 'redux'
import { userReducer } from './reducers/userReducer'

import { thunk } from 'redux-thunk'

let rootReducer = combineReducers({
  userReducer: userReducer
})


export let store = createStore(rootReducer, applyMiddleware(thunk))






