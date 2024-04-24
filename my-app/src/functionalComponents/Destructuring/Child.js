import React, { useState } from 'react'

function Child({ count }) {
  var [data] = useState({value1: 100, value2: 200})
  // var {count} = props
  var {value1, value2} = data
  return (
    <div>
      {/* <h4>Count: { props.count}</h4> */}
      <h4>Count: {count}</h4>
      {/* <h4>Value1: {data.value1}</h4>
      <h4>Value2: {data.value1}</h4> */}
      <h4>Value1: {value1}</h4>
      <h4>Value2: {value2}</h4>
    </div>
  )
}

export default Child