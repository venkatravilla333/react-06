import React, { Component } from 'react'

export class Binding extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
    // this.updateCount = this.updateCount.bind(this)
  }
  updateCount = ()=> {
    console.log(this)
  }
  render() {
    return (
      <div>
        <h4>Count: {this.state.count}</h4>
        <button onClick={this.updateCount}>update</button>
      </div>
    )
  }
}

export default Binding