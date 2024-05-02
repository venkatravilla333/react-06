import React, { useState } from 'react'
import useCount from './useCount';

function Countone() {
  // var [count, setCount] = useState(0);

  // var updateCount = () => {
  //   setCount(count + 1);
  // };

  var [count, updateCount] = useCount()
  
  return (
    <div>
      <h4>Countone: {count}</h4>
      <button onClick={updateCount}>Increase count</button>
    </div>
  );
}

export default Countone