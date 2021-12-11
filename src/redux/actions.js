import actionTypes from "./action-types";

export const incrementCounter = (count) => {
  return {
    type: actionTypes.INCREMENT_COUNTER,
    payload: count,
  };
};
export const decrementCounter = (count) => {
  return {
    type: actionTypes.DECREMENT_COUNTER,
    payload: count,
  };
};
export const resetCounter = () => {
  return {
    type: actionTypes.RESET_COUNTER,
    payload: "",
  };
};
