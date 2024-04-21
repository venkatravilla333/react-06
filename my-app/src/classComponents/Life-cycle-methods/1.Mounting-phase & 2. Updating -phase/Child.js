import React, { Component } from 'react'
import Subchild from './Subchild'

export class Child extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log('child constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('child static derived');
    return null;
  }

  componentDidMount() {
    console.log('child did mount');
  }
  shouldComponentUpdate(nexProps, nextState) {
    console.log('child should updated');
    return true;
  }

  getSnapshotBeforeUpdate(preProps, preState) {
    console.log('child snap');
    return null;
  }

  componentDidUpdate(preProps, preState, snap) {
    console.log('child did update');
  }
  render() {
    console.log('child render');
    return (
      <div>
        <h4>This is child component</h4>
        <Subchild />
      </div>
    );
  }
}

export default Child