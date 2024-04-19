import React, { Component } from 'react'
import B from './B'
import C from './C'
import { store } from '../redux/store'
import {Provider} from 'react-redux'

export class A extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
        <B />
        <C />
        </Provider>
      </div>
    )
  }
}

export default A