import {applyMiddleware, combineReducers, createStore} from 'redux'
import { userReducer } from './reducers/userReducer'
import { composeWithDevTools } from '@redux-devtools/extension';

import { thunk } from 'redux-thunk'

let rootReducer = combineReducers({
  userReducer: userReducer
})


export let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);






