import React, { Component } from 'react'
import H from './H'
import I from './I'

export class C extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <H />
        <I name={this.props.name} />
      </div>
    )
  }
}

export default C