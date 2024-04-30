import React from 'react'
import { useLocation, useOutletContext, useParams } from 'react-router-dom'

function ProductDec() {
  var { id } = useParams()
  var productObject = useOutletContext()
  console.log(productObject)
 var productObj = useLocation()
  return (
    <div>
      <h4>Product Dec {id}</h4>
      <h4>{JSON.stringify(productObj) }</h4>
    </div>
  )
}

export default ProductDec