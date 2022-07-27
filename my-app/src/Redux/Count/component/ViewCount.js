import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decreaseCountAction, increaseCountAction } from "../actions";

function CountApp() {
  const count = useSelector((state) => state.counterReducer.count);
  const dispatch = useDispatch();
  return (
    <div style={{}}>
      <h2>{count}</h2>
      <button
        onClick={() => {
          dispatch(increaseCountAction(1));
        }}
      >
        tang
      </button>
      <button
        onClick={() => {
          dispatch(decreaseCountAction(1));
        }}
      >
        giam
      </button>
    </div>
  );
}

export default CountApp;
