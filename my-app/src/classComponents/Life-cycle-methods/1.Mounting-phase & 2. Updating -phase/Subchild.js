import React, { Component } from 'react'

export class Subchild extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log('sub child contructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('sub child static derived');
    return null;
  }

  componentDidMount() {
    console.log('sub child did mount');
  }

  shouldComponentUpdate(nexProps, nextState) {
    console.log('sub child should updated');
    return true;
  }

  getSnapshotBeforeUpdate(preProps, preState) {
    console.log('sub child snap');
    return null;
  }

  componentDidUpdate(preProps, preState, snap) {
    console.log('sub child did update');
  }
  render() {
    console.log('sub child render');
    return <h4>This is sub child component</h4>;
  }
}

export default Subchild