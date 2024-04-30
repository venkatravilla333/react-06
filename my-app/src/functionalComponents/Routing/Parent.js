import React from 'react'
import './Style.css'
import {Routes, Route, Link, useLocation, NavLink} from 'react-router-dom'
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
// import Lazy from './Lazy'

var Lazy = React.lazy(()=>import('./Lazy'))

function Parent() {
  var obj = useLocation()
  console.log(obj)
  return (
    <div>
      <ul>
        <li>
          <NavLink to='/home'>Home</NavLink>
        </li>
        <li>
          <NavLink
            to='/about'
            style={({ isActive }) => {
              return isActive
                ? { color: 'red', fontSize: '30px' }
                : { color: 'yellow' };
            }}
          >
            {({ isActive }) => {
              return isActive ? 'About active' : 'About inactive';
            }}
          </NavLink>
        </li>
        <li>
          <NavLink to='/profile'>Profile</NavLink>
        </li>
        <li>
          <NavLink to='/products'>Products</NavLink>
        </li>
        <li>
          <NavLink to='/laptops'>Laptops</NavLink>
        </li>
        <li>
          <NavLink to='/login'>Login</NavLink>
        </li>
        <li>
          <NavLink to='/lazy'>Heavy Data</NavLink>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path='/'>
          <Route path='/home' element={<Home />} />
          <Route
            path='/lazy'
            element={
              <React.Suspense fallback='Loading'>
                <Lazy />
              </React.Suspense>
            }
          />
          <Route path='/login' element={<Login />} />
          <Route index element={<About />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/products' element={<Products />}>
            <Route path=':id' element={<ProductDec />} />
          </Route>
          <Route path='/laptops' element={<Laptop />}>
            <Route path=':id' element={<LaptopDec />} />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
      {obj.pathname !== '/login' && <Footer />}
      {/* <Footer/> */}
      {/* <Home />
      <About />
      <Profile />
      <Products/> */}
    </div>
  );
}

export default Parent