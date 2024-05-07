import React, { Component } from 'react'
// import HOC from './HOC/HOC';

export class Countone extends Component {
  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //      count: 0
  //   }
  // }

  // updatecount = () => {
  //   this.setState({
  //     count: this.state.count+1
  //   })
  // }
  render() {
    return (
      <div>
        <h4>Countone : {this.props.count}</h4>
        <button onClick={this.props.updateCount}>increase</button>
      </div>
    );
  }
}

// export default HOC(Countone)
export default Countone