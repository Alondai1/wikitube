import { combineReducers } from "redux";
import mediaReducer from "./mediaReducer";
import appReducer from "./appReducer";

const combinedReducer = combineReducers({
  mediaReducer,
  appReducer,
});

export default combinedReducer;
