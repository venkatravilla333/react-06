import React, { Component } from 'react'
import axios from 'axios'
export class Getdata extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      loading: false,
      users: [],
      error: ''
    }
  }

  componentDidMount() {
    console.log('did mount')
    this.setState({
      loading: true
    })
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        this.setState({
          users: res.data,
          loading: false
          
        })  
      })
      .catch((error) => {
        this.setState({
          error: error.message,
          loading: false
        })
      
    })
  }
  render() {
    console.log('render')
    return (
      <div>
        {
          this.state.loading ? <h4>Loading</h4> : this.state.error ? (<h4>{this.state.error}</h4>) : (
            <div>
              {this.state.users.map((userobj) => {
                return <h5 key={userobj.id}>{userobj.name}</h5>
              })}
            </div>
          )
          }
      </div>
    )
  }
}

export default Getdata