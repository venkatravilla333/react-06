import React, { Component } from 'react'

export class Browser extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      x: 0,
      y: 0
    }
  }

  updateState = (e) => {
    console.log('update state')
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }

  componentDidMount() {
    console.log('did mount')
    window.addEventListener('mousemove', this.updateState)
  }
  componentWillUnmount() {
    console.log('clean up')
  window.removeEventListener('mousemove', this.updateState)
}
  render() {
    return (
      <div>
        <h4>X: {this.state.x }</h4>
        <h4>Y: {this.state.y }</h4>
      </div>
    )
  }
}

export default Browser