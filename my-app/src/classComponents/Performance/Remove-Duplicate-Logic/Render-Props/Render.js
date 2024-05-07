import React, { Component } from 'react'

export class Render extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  updateCount = () => {
    this.setState({
      count: this.state.count+1
    })
  }
  render() {
    return this.props.render(this.state.count, this.updateCount)
  }
}

export default Render