import React from 'react'
import B from './B'
import C from './C'

import { store } from '../redux/store'
import { Provider } from 'react-redux'

function A() {
  return (
    <div>
      <Provider store={store}>
      <B />
      <C/>
      </Provider>
    </div>
  )
}

export default A