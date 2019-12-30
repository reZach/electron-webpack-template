import { combineReducers } from "redux";
import homeReducer from "../components/home/homeSlice";

export default combineReducers({
  home: homeReducer
});