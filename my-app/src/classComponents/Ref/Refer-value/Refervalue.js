import React, { Component } from 'react'

export class Refervalue extends Component {
  timer
  constructor(props) {
    super(props)
  
    this.state = {
       timer: 0
    }
    

  }

  componentDidMount() {
  this.timer =  setInterval(() => {
      this.setState({timer: this.state.timer+1})
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render() {
    return (
      <div>
        <h4>Timer: {this.state.timer}</h4>
        <button onClick={()=>clearInterval(this.timer)}>clear timer</button>
      </div>
    )
  }
}

export default Refervalue