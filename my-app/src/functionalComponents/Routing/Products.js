import React, { useState } from 'react'
import {Link, Outlet} from 'react-router-dom'

function Products() {

  var [products, setProducts] = useState([
    {id: 1, pName: 'Banana'},
    {id: 2, pName: 'Apple'},
    {id: 3, pName: 'Grape'},
    {id: 4, pName: 'Papaya'},
  ])

  return (
    <div>
      <ul>
        {
          products.map((product) => {
            return (
              <li>
                <Link state={product} to={`/products/${product.id}`}>{product.pName }</Link>
              </li>
            );
          })
        }
       
        {/* <li>
          <Link to='/products/2'>Apple</Link>
        </li>
        <li>
          <Link to='/products/3'>Grape</Link>
        </li>
        <li>
          <Link to='/products/4'>Papaya</Link>
        </li> */}
      </ul>
      <Outlet context={products}/>
    </div>
  );
}

export default Products