import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getDenomination} from '../actions/index'
import {bindActionCreators} from 'redux';

class denominacionContainer extends Component {

  render(){
    return(
        <div className="col-md-4  borderSeparator">

          <div className="row">
            <div className="col-md-6  ">
              {this.props.getDenomination}
            </div>

            <div className="col-md-6  ">
            flex-column
            </div>
          </div>

        </div>
  );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({getDenomination},dispatch);
}

export default connect(null,mapDispatchToProps)(denominacionContainer);
