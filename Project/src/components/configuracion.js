import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getDenomination} from '../actions/index'
import Dropdown from 'react-dropdown';

class configuracion extends Component {
  constructor (props) {
    super(props)
    this._onSelect = this._onSelect.bind(this)
  }

  componentWillMount(){
    this.props.getDenomination('usa');
  }
  _onSelect(option){
    this.props.getDenomination(option.value);
  }
  render(){
    const options = ['usa', 'mex'];
    const defaultOption = options[0];
    return(

        <div className="col-md-8 ">

          <div className="row borderSeparator">
            Total: {this.props.sum}
          </div>
          <div className="row borderSeparator">
            <Dropdown options={options} onChange={this. _onSelect} value={defaultOption} />

          </div>


        </div>
  );
  }
}

function mapStateToprops(state) {
  return{ sum : state.info.sum};
}

export default connect(mapStateToprops,{getDenomination})(configuracion);
