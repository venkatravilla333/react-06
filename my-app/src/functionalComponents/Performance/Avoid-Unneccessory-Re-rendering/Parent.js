import React, { useCallback, useMemo, useState } from 'react'
import Child from './Child'
import Factorial from './Factorial'

function Parent() {

  var [count, setCount] = useState(0)
  
  console.log('parent render')

  var updateCount = () => {
    setCount(count+1)
  }

  // var x = 10
  // var x = {
  //   value: 10
  // }
  // var x = [1,2,3]

  
  var x = useMemo(() => {
     var data = {
          value: 10
        }
        return data
      }, [count]) 
      
      // var x = ()=>{}
      
  // var x = useCallback(() => {
  //   var data = () => { };
  //   return data
  // }, []) 
  
      return (
    <div>
      <h4>Parent: {count}</h4>
      <button onClick={updateCount}>Increase Count</button>
      {/* <Child updateCount = {updateCount} /> */}
          <Child x={{...x, name: 'sachin'}} />
          {/* <Factorial/> */}
    </div>
  )
}

export default Parent