import React, { useState } from 'react'

function Parent() {
 var [data, setData] = useState(['sachin', 'kohli', 'gill'])
  return (
    <>
      <p>hello-1</p>
      <p>hello-2</p>
      {
        data.map((name, index) => {
          return (
            <React.Fragment key={index}>
              <h4>{name}</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, necessitatibus?
              </p>
            </React.Fragment>
          );
            
          
        })
      }
    </>
  )
}

export default Parent