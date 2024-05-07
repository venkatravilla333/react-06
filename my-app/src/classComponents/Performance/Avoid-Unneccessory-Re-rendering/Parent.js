import React, { Component, PureComponent } from 'react'
import RegularChild from './RegularChild'
import PureChild from './PureChild'



export class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count+1
      })
    }, 2000)
  }
  render() {
    console.log('parent render')
    return (
      <div>
        <h4>Parent count:{this.state.count} </h4>
        <RegularChild count={this.state.count} />
        <PureChild count={this.state.count} />
      </div>
    )
  }
}

export default Parent