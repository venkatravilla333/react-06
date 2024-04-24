import React, { Component } from 'react'

export class Child extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       names: ['sachin', 'kohli', 'gill', {value: 200}]
    }
  }
  render() {
    var { count } = this.props
    var [nama1, name2, name3, obj] = this.state.names
    var {value} = obj
    return (
      <div>
        <h4>Count: {count}</h4>
        {/* <h4>Name: {this.state.names[0] }</h4>
        <h4>Name: {this.state.names[1] }</h4>
        <h4>Name: {this.state.names[2] }</h4> */}
        <h4>Name: {nama1 }</h4>
        <h4>Name: {name2 }</h4>
        <h4>Name: {name3 }</h4>
        <h4>Value: {value}</h4>

      </div>
    )
  }
}

export default Child