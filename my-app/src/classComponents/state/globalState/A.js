import React, { Component } from 'react'
import B from './B'
import C from './C'
import axios from 'axios'

export let productsContent = React.createContext()
export let usersContent = React.createContext()
console.log(productsContent._currentValue)

export class A extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      posts: [],
      users: []
    }
  }

  getPosts = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log(res.data)
        this.setState({
          posts: res.data
        })
    })
  }
  getUsers = () => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      console.log(res.data);
      this.setState({
        users: res.data,
      });
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.getPosts}>A com: Get Posts</button>
        <button onClick={this.getUsers}>A com: Get Users</button>
        <usersContent.Provider value={'sachin'}>
          <productsContent.Provider value={'kohli'}>
            <B />
            <C />
          </productsContent.Provider>
        </usersContent.Provider>
      </div>
    );
  }
}

export default A