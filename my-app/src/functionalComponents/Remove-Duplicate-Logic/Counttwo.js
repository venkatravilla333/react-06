import React, { useState } from 'react';
import useCount from './useCount';

function Counttwo() {
  // var [count, setCount] = useState(0);

  // var updateCount = () => {
  //   setCount(count + 1);
  // };
 var [count, updateCount] = useCount()
  return (
    <div>
      <h4>Counttwo: {count}</h4>
      <button onMouseOver={updateCount}>Increase count</button>
    </div>
  );
}

export default Counttwo;
