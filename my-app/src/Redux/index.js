import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Count from "./Count";

function ReduxCount() {
  return (
    <Provider store={store}>
      <div>
        <Count />
      </div>
    </Provider>
  );
}

export default ReduxCount;
