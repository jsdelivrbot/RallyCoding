import { combineReducers } from 'redux';
const sumMap = new Map()
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
        sumMap.set(action.payload.indexM,action.payload.valueM);
        var sumValue = 0;
        for (let [key, value] of sumMap) {
          sumValue += key*value;
          console.log(key)
        }

      return  {...state, sum:sumValue}
  }
  return state
}

export default rootReducer;
