import { combineReducers } from 'redux';

const INITIAL_STATE ={contry:{}, sum:null};

const rootReducer = combineReducers({
  info: bindingState
});
function  bindingState(state =INITIAL_STATE, action){
  switch (action.type) {
    case 'GET_DENOMINATION':
      //console.log('getDenomination ',action.payload.bills);
      return  {...state, contry:action.payload}
    case 'GET_SUM':
      return  {...state, sum:action.payload}
  }
  return state
}
/*
function bindingStateFromSum(state=null,action) {
  switch (action.type) {
    case 'GET_SUM':
    return  action.payload
    default:
      return state;
  }
  return state

}*/
export default rootReducer;
