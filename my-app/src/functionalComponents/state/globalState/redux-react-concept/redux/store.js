
import {applyMiddleware, combineReducers, createStore} from 'redux' 
import { cakeReducer } from './reducers/cakeReducer'
import { curdReducer } from './reducers/curdReducer'
import logger from 'redux-logger'

var rootReducer = combineReducers({
  cakeReducer: cakeReducer,
  curdReducer: curdReducer
})


export var store = createStore(rootReducer, applyMiddleware(logger))