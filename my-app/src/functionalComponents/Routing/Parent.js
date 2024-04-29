import React from 'react'
import './Style.css'
import {Routes, Route, Link, useLocation} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Profile from './Profile'
import Products from './Products'
import Footer from './Footer'
import ProductDec from './ProductDec'
import LaptopDec from './LaptopDec'
import Laptop from './Laptop'
import PageNotFound from './PageNotFound'
import Login from './Login'

function Parent() {
  var obj = useLocation()
  console.log(obj)
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/laptops">Laptops</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/login' element={<Login/> } />
        <Route path='/about' element={<About/> } />
        <Route path='/profile' element={<Profile/> } />
        <Route path='/products' element={<Products />}>
          <Route path=':id' element={<ProductDec />} />
        </Route>
        <Route path='/laptops' element={<Laptop />}>
          <Route path=':id' element={<LaptopDec />} />
        </Route>
        <Route path='*' element={<PageNotFound/>}/>
         
      </Routes>
      {obj.pathname !== '/login' && <Footer/> }
      {/* <Footer/> */}
      {/* <Home />
      <About />
      <Profile />
      <Products/> */}
      
    </div>

  )
}

export default Parent