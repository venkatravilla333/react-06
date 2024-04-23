import React, { Component } from 'react'
import VoteRight from './VoteRight'
import ErrorBoundry from './ErrorBoundry'

export class Parent extends Component {
  render() {
    return (
      <div>
        <ErrorBoundry>
        <VoteRight age = '15'/>
        </ErrorBoundry>
        <ErrorBoundry>
        <VoteRight age= '18'/>
        </ErrorBoundry>
        <ErrorBoundry>
        <VoteRight age = '20'/>
        </ErrorBoundry>
      </div>
    )
  }
}

export default Parent