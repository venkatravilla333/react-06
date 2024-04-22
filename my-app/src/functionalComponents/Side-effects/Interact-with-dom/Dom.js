import React, { useEffect, useState } from 'react'

function Dom() {

 var [normalCount, setNormalCount]= useState(0)
  var [domCount, setDomCount] = useState(0)

  useEffect(() => {
    console.log('effect called')
    document.title = `dom count ${domCount}`
  }, [domCount])

  var updateNormalCount = () => {
    setNormalCount(normalCount+1)
  }
  var updateDomCount = () => {
    setDomCount(domCount+1)
  }
  
  useState(0)
  return (
    <div>
      <h4>Normal count: {normalCount}</h4>
      <button onClick={updateNormalCount}>update normal count</button>
      <h4>Dom count: {domCount }</h4>
      <button onClick={updateDomCount}>update dom count</button>
    </div>
  )
}

export default Dom