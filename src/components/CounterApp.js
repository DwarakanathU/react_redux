import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  resetCounter,
} from "../redux/actions";

const CounterApp = () => {
  const dispatch = useDispatch();
  let counter = useSelector((state) => state.counterReducer.counter);

  const incCounter = () => {
    dispatch(incrementCounter());
  };

  const decCounter = () => {
    dispatch(decrementCounter());
  };

  const resCounter = () => {
    dispatch(resetCounter());
  };
  return (
    <div className="ui cards">
      <div className="card">
        <h1>{counter}</h1>
        <div className="large ui buttons">
          <button className="ui button" onClick={decCounter}>
            <i class="minus icon"></i>
          </button>
          <button className="ui button" onClick={resCounter}>
            Reset
          </button>
          <button className="ui button" onClick={incCounter}>
            <i class="plus icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterApp;
