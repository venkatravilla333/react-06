import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDec() {
 var {id} = useParams()
  return (
    <div>ProductDec {id}</div>
  )
}

export default ProductDec