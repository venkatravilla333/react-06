import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function Parent() {
  var name = 'sachin' //api call
  return (
    <div>
      <Child1 name={name} />
      <Child2 />
    </div>
  )
}

export default Parent