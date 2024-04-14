import React, { Component } from 'react'
import B from './B'
import C from './C'

export class A extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'sachin'
    }
  }

  updateName = () => {
    this.setState({
      name: 'kohli'
    })
  }
  render() {
    return (
      <div>
        {/* <h4>A com Name: {this.state.name} </h4>
        <button onClick={this.updateName}>update name</button> */}
        <B name={ this.state.name} />
        <C name={this.state.name } />
        
      </div>
    )
  }
}

export default A