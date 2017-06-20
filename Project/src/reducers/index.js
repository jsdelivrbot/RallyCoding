import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  contry: bindingState
});
function  bindingState(state =[], action){
  switch (action.type) {
    case 'GET_DENOMINATION':
      return  [action.payload.bills,action.payload.coins,... state ];
    default:
      return state;
  }
  return state
}

export default rootReducer;
