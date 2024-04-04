import React from 'react'

function Child1(props) {
  console.log(props)
  // props.data = 'kohli'
  return (
    <>
      <div>Child1 : {props.data}</div>
      <button onClick={()=>props.test('child data')}>Button in child1</button>
    </>
  );
}

export default Child1