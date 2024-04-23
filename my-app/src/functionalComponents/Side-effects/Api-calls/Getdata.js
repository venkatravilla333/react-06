import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Getdata() {
  
  var [loading, setLoading] = useState(false)
 var [users, setUsers] = useState([])
 var [error, setError] = useState('')
  
  console.log('render')
  // var getData = () => {
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //     .then((res) => {
  //       console.log(res.data)
  //       setUsers(res.data)
  //   })

  // }
  useEffect(() => {
    console.log('effect runs');
    setLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
          console.log(res.data)
          setUsers(res.data)
          setLoading(false)
        }).catch((error) => {
          setError(error.message)
          setLoading(false)
      })
  }, [])

  return (
    <div>
      {/* <button onClick={getData}>Getdata</button> */}
      
      {loading ? <h4>Loading</h4> : error ? <h4>{error}</h4> : (
        <div>
          {
            users.map((obj) => {
              return <h5 key={obj.id}>{obj.name}</h5>
            })
          }
        </div>
      )}
      
    </div>
  )
}

export default Getdata