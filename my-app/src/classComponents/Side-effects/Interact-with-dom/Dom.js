import React, { Component } from 'react'

export class Dom extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      normalCount: 0,
      domCount: 0
    }
  }

  componentDidMount() {
    console.log('did mount')
    document.title = `dom count ${this.state.domCount}`
  }


  updateNormalCount = () => {
    this.setState({
      normalCount: this.state.normalCount+1
    })
  }
  updateDomCount = () => {
    this.setState({
      domCount: this.state.domCount+1
    })
  }

  componentDidUpdate(preProps, preState) {
    if (preState.domCount !== this.state.domCount) {
      console.log('did update');
      document.title = `dom count ${this.state.domCount}`;
    }
  }
  render() {
    console.log('render')
    return (
      <div>
        <h4>Normal count: {this.state.normalCount}</h4>
        <button onClick={this.updateNormalCount}>update normal count</button>
        <h4>Dom count: {this.state.domCount }</h4>
        <button onClick={this.updateDomCount}>update dom count</button>
      </div>
    )
  }
}

export default Dom