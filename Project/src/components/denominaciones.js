import React, {Component} from 'react'
import {connect} from 'react-redux';
import {setActiontoHash} from '../actions/index'
import {bindActionCreators} from "redux";
import Denomination from './denomination';

class denominacionContainer extends Component {
  componentWillMount(){
    this.props.setActiontoHash('0','0');
  }

  render(){
    if (!this.props.contry){
      return(
        <div>
          Loading...
        </div>
      )
    }
    const {bills,coins}=this.props.contry;
    //console.log(bills);
    return(
        <div className="col-md-4  borderSeparator">

          <div className="row">
            <div className="col-md-6  ">
              <Denomination elements ={bills} setActionto={this.props.setActiontoHash}/>
            </div>

            <div className="col-md-6  ">
            <Denomination elements ={coins} setActionto={this.props.setActiontoHash}/>
            </div>
          </div>

        </div>
  );
  }
}

function mapStateToprops(state) {
  return{ contry : state.info.contry};
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({setActiontoHash}, dispatch)
}


export default connect(mapStateToprops,mapDispatchToProps)(denominacionContainer);
