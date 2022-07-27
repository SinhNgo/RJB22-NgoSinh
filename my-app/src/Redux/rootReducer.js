// DEFAULT STATE
import { combineReducers } from "redux";
import counterReducer from "./Count/reducers";
// COMBINE MANY REDUCERS

const rootReducer = combineReducers({
  counterReducer,
});

export default rootReducer;
