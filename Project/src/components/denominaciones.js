import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getDenomination} from '../actions/index'
import {bindActionCreators} from 'redux';

class denominacionContainer extends Component {
  componentWillMount(){
    this.props.getDenomination('usa');
  }
  render(){
    const {bills,coins}=this.props;
    console.log(bills);
    return(
        <div className="col-md-4  borderSeparator">

          <div className="row">
            <div className="col-md-6  ">

            </div>

            <div className="col-md-6  ">
            flex-column
            </div>
          </div>

        </div>
  );
  }
}


export default connect(null,{getDenomination})(denominacionContainer);
