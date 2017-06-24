import { combineReducers } from 'redux';

const INITIAL_STATE ={contry:{}, sum:'000'};

const rootReducer = combineReducers({
  info: bindingState
});
function  bindingState(state =INITIAL_STATE, action){
  switch (action.type) {
    case 'GET_DENOMINATION':
      //console.log('getDenomination ',action.payload.bills);
      return  {...state, contry:action.payload}
    case 'SET_TO_HASH':
        sumMap.set(action.index,action.value);
        for (let [key, value] of sumMap) {
          console.log(`${key}: ${value}`)
        }

      return  {...state, sum:action.value}
  }
  return state
}

export default rootReducer;
