import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getDenomination,setActiontoHash} from '../actions/index'
import {bindActionCreators} from "redux";

class denominacionContainer extends Component {
  componentWillMount(){
    this.props.getDenomination('usa');
  }

  setSum() {
    console.log("console")
  }
  createListElements(elements=[]){
    return elements.map((element)=>{
      return(
        <li key={element} className="list-group-item"  ><input key={element} type="text" onchange={this.setSum()}/>{element}</li>
      );
    });
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
            <ul className="list-group">
              {this.createListElements(bills)}
            </ul>
            </div>

            <div className="col-md-6  ">
            {this.createListElements(coins)}
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
  return bindActionCreators({getDenomination, setActiontoHash}, dispatch)
}


export default connect(mapStateToprops,mapDispatchToProps)(denominacionContainer);
