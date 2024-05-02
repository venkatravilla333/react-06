

import React, { useState } from 'react'

function useCount() {
  var [count, setCount] = useState(0);

  var updateCount = () => {
    setCount(count + 1);
  };
  return [count, updateCount]
}

export default useCount