import React, { useMemo, useState } from 'react'

function Factorial() {
  var [count, setCount] = useState(0)
  var [num, setNum] = useState(5)
  
  
  var facttorialCal = (n) => {
    console.log('factorial running')
    var result = 1
    for (var i = n; i >= 1; i--){
      result = result*i
    }
    return result
    
  }
  var value = useMemo(() => {
  return facttorialCal(num);
 }, [num]) 
  return (
    <div>
      <h4>Count: {count}</h4>
      <button onClick={()=>setCount(count+1)}>update count</button>
      <h4>Factorial value: {value}</h4>
      <button onClick={()=>setNum(num+1)}>update factorial</button>
    </div>
  );
}

export default Factorial