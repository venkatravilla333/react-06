import React, { Component } from 'react'

export class Input extends Component {
  constructor(props) {
    super(props)
  
  this.inputRef =  React.createRef()
  }

  componentDidMount() {
    this.inputRef.current.focus()
  }

  getValue = () => {
   alert(this.inputRef.current.value)
  }
  render() {
    console.log('render')
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.getValue}>getValue</button>
      </div>
    )
  }
}

export default Input