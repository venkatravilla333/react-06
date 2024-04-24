import React, { Component } from 'react'

export class List extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       users: ['sachin', 'kohli', 'gill', 'rahul', 'dhoni', 'sami']
    }
  }
  render() {
    var {users} = this.state
    return (
      <div>
        <h3>List of names</h3>
        {/* <h4>{this.state.users[0] }</h4>
        <h4>{this.state.users[1] }</h4>
        <h4>{this.state.users[2] }</h4>
        <h4>{this.state.users[3] }</h4>
        <h4>{this.state.users[4] }</h4> */}
        {
          users.map((user) => {
            return <h5>{user}</h5>
          })
        }
      </div>
    )
  }
}

export default List