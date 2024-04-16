import React, { Component } from 'react'
import { productsContent, usersContent } from './A'

export class K extends Component {
  render() {   
    return <productsContent.Consumer>
      {
        (name1) => {
          return <usersContent.Consumer>
            {
              (name2) => {
                return <h4>Name1: {name1}, Name2: {name2}</h4>
              }
            }
          </usersContent.Consumer>
        }
      }
    </productsContent.Consumer>
    
  }
}

export default K