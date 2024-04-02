import React from 'react'


function Jsx() {
  // return (
  //   <div>
  //     <h1>Jsx syntax1</h1>
  //     <h1>Jsx syntax2</h1>
  //   </div>
  // );
//  return React.createElement('div', {},
//     React.createElement('h1', {}, 'Jsx syntax1'),
//     React.createElement('h1', {}, 'Jsx syntax2'),
  // );
  
  // return (
    // <div>
    // <React.Fragment>
    //   <h1>Heading 1</h1>
    //   <h1>Heading 1</h1>
    // </React.Fragment>
    // [<h1>Heading 1</h1>,
    // <h1>Heading 1</h1>]
    // </div>
   
  // ); 
  // var x = 'sachin'
  // var x = 100
  // var x = () => {
  //   return 100
  // }
  // var x = [100]
  // var x = {
  //   num: 100
  // }
  let x = [1, 2, 3]
  let mapArr = x.map((num) => {
    return num*100
  })
  return (
    <>
      <h1>{x}</h1>
    </>
  )
}
export default Jsx