import React, { PureComponent } from 'react'

export class PureChild extends PureComponent {
  render() {
    console.log('pure child render')
    return (
      <div>PureChild</div>
    )
  }
}

export default PureChild

