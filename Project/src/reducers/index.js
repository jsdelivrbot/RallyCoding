import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  contry: bindingState
});
function  bindingState(state =null, action){
  switch (action.type) {
    case 'GET_DENOMINATION':
      //console.log('getDenomination ',action.payload.bills);
      return  action.payload
    default:
      return state;
  }
  return state
}

export default rootReducer;
