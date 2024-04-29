import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'


function PageNotFound() {
  var navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate('/')     
    }, 1000)
  })
  return (
    // <Navigate to='/' />
    <h4>Page not Found</h4>
  )
}

export default PageNotFound