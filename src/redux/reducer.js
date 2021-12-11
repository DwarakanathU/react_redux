import { combineReducers } from "redux";

const initialState = {
  counter: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return {
        counter: state.counter + 1,
      };
    case "DECREMENT_COUNTER":
      return {
        counter: state.counter - 1,
      };
    case "RESET_COUNTER":
      return {
        counter: 0,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counterReducer,
});

export default rootReducer;
