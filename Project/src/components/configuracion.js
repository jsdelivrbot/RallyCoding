import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getSum} from '../actions/index'
import {bindActionCreators} from "redux";

class configuracion extends Component {
  componentWillMount(){
    this.props.getSum();
  }
  render(){
    return(

        <div className="col-md-8 ">

          <div className="row borderSeparator">
            {this.props.sum}
          </div>
          <div className="row borderSeparator">
            0000000
          </div>


        </div>
  );
  }
}

function mapStateToprops(state) {
  return{ sum : state.info.sum};
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({getSum}, dispatch)
}


export default connect(mapStateToprops,mapDispatchToProps)(configuracion);
