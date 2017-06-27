import { combineReducers } from 'redux';
const sumMap = new Map()
const INITIAL_STATE ={contry:{}, sum:'0'};

const rootReducer = combineReducers({
  info: bindingState
});
function  bindingState(state =INITIAL_STATE, action){
  switch (action.type) {
    case 'GET_DENOMINATION':
      sumMap.clear();
      //console.log('getDenomination ',action.payload.bills);
      return  {...state, contry:action.payload ,sum:'0'}
    case 'SET_TO_HASH':
        sumMap.set(action.payload.indexM,action.payload.valueM);
        var sumValue = 0;
        for (let [key, value] of sumMap) {
          sumValue += key*value;
        }

      return  {...state, sum:sumValue}
  }
  return state
}

export default rootReducer;
