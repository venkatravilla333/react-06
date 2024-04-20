import React from 'react'
import B from './B'
import C from './C'

// import { store } from '../redux/sync-calls/store'
import { Provider } from 'react-redux'
import { store } from '../redux/async-calls/store'

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