import React, { Component } from 'react'
import RegularChild from './RegularChild'
import PureChild from './PureChild'

// var x = 10
// var x = {}
// var x = []
// var x = ()=>{}

export class ExtraParent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
    this.hello = {
      data: ()=>{}
    }
  }

  updateCount = () => {
    this.setState({
      count: this.state.count+1
    })
  }
  render() {
    console.log('parent')
    return (
      <div>
        <h5>Parent Count: {this.state.count}</h5>
        <button onClick={this.updateCount}>increase count</button>
        <RegularChild count={this.hello.data} />
        <PureChild count={this.hello.data} />
      </div>
    )
  }
}

export default ExtraParent