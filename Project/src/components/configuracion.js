import React, {Component} from 'react'
import {connect} from 'react-redux';


class configuracion extends Component {

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

export default connect(mapStateToprops)(configuracion);
