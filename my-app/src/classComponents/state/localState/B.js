import React, { Component } from 'react'
import D from './D'
import E from './E'

export class B extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <D />
        <E name={this.props.name} />
      </div>
    )
  }
}

export default B