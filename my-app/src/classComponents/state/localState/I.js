import React, { Component } from 'react'
import J from './J'
import K from './K'

export class I extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <J />
        <K name={this.props.name } />
      </div>
    )
  }
}

export default I