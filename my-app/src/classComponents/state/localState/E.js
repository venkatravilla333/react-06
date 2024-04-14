import React, { Component } from 'react'
import F from './F'
import G from './G'

export class E extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <F name={ this.props.name} />
        <G name={this.props.name} />
      </div>
    )
  }
}

export default E