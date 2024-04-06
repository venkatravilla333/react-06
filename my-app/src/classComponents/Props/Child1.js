import React, { Component } from 'react'

export class Child1 extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h3>Child1: {this.props.name}</h3>
        <button onClick={()=> this.props.test('child1 data')}>click</button>
      </div>
    );
  }
}

export default Child1