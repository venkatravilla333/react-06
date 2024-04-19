import React, { Component } from 'react'
import {connect} from 'react-redux'
import { buyCake } from '../redux/actions/cakeActions';
import { buyCurd } from '../redux/actions/curdActions';
// import { buyCurd } from '../redux/actions/curdActions';
export class K extends Component {
  
  render() {
    return (
      <div>
        <h4>K : no of cakes : {this.props.noOfCakes}</h4>
        <button onClick={this.props.buyCake}>Buy cake</button>
        <h4>K : no of curds : {this.props.noOfCurds}</h4>
        <button onClick={this.props.buyCurd}>Buy curd</button>
      </div>
    );
  }
}

var mapStateToProps = (state) => {
  return {
    noOfCakes: state.cakeReducer.noOfCakes,
    noOfCurds: state.curdReducer.noOfCurds,
  }
}

var mapDispatchToProps = (dispatch) => {
  return {
    buyCake: ()=>{dispatch(buyCake())},
    buyCurd: ()=>{dispatch(buyCurd())},
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (K)