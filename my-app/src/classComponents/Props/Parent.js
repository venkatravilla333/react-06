import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

class Parent extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'sachin'
    }
  }

  test = (data) => {
    console.log('test')
    console.log(data)
    this.setState({
      name: data
    })
  }

  
  render() {
    return (
      <div>
        <h1>Parent: {this.state.name}</h1>
        <Child1 name={this.state.name} test={this.test} />
        <Child2 name={this.state.name} />
      </div>
    )
  }
}
export default Parent