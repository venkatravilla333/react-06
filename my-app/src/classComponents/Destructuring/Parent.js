import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }
  render() {
    var {count} = this.state
    return (
      <div>
        <Child count={count} />
      </div>
    )
  }
}

export default Parent