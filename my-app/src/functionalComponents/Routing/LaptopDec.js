import React from 'react'
import { useParams } from 'react-router-dom'

function LaptopDec() {
 var {id} = useParams()
  return (
    <div>LaptopDec {id}</div>
  )
}

export default LaptopDec