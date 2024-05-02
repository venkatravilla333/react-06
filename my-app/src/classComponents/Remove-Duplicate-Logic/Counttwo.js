import React, { Component } from 'react'
// import HOC from './HOC/HOC';

export class Counttwo extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     count: 0,
  //   };
  // }

  // updatecount = () => {
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  // };
  render() {
    return (
      <div>
        <h4>Counttwo : {this.props.count}</h4>
        <button onMouseOver={this.props.updateCount}>increase</button>
      </div>
    );
  }
}

// export default HOC(Counttwo)
export default Counttwo