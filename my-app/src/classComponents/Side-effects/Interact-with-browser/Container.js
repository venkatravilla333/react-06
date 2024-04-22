import React, { Component } from 'react'
import Browser from './Browser'

export class Container extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       display: true
    }
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState({display: !this.state.display})}>toggle</button>
        {this.state.display && <Browser/>}
      </div>
    )
  }
}

export default Container