import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getDenomination} from '../actions/index'

class configuracion extends Component {
  componentWillMount(){
    this.props.getDenomination('usa');
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

export default connect(mapStateToprops,{getDenomination})(configuracion);
