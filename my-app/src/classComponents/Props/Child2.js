import React, { Component } from 'react'

export class Child2 extends Component {
  render() {
    return (
      <div>Child2: {this.props.name}</div>
    )
  }
}

export default Child2