import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import './Style.css'

function Laptop() {

   var [laptops, setLaptop] = useState([
     { id: 1, name: 'Lenova' },
     { id: 2, name: 'Hp' },
     { id: 3, name: 'Dell' },
     
   ]);
  return (
    <div>

      <ul>
        {
          laptops.map((obj) => {
            return (<li>
              <Link to={`/laptops/${obj.id}`}>{ obj.name}</Link>
            </li>)
          })
        }
      </ul>
      <Outlet/>
    </div>
  )
}

export default Laptop