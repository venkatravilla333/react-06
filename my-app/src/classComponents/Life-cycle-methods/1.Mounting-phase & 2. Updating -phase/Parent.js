import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 100
      
    }
    console.log('Parent constructor')  
    this.updateCount = this.updateCount.bind(this)
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Parent static derived')
   return null
  }
  
  componentDidMount() {
    console.log('parent did mount')
  }

  shouldComponentUpdate(nexProps, nextState) {
    console.log('parent should updated')
  return true
  }
  
  getSnapshotBeforeUpdate(preProps, preState) {
    console.log('parent snap')
    return null
  }

  componentDidUpdate(preProps, preState, snap) {
    console.log('parent did update')
  }

  updateCount() {
    this.setState({
      count: this.state.count+1
    })
  }

  render() {
    console.log('Parent render')
    return (
      <div>
        <h4>Count :  {this.state.count} </h4>
        <button onClick={this.updateCount}>update state</button>
        <Child/>
      </div>
    )
  }
}

export default Parent