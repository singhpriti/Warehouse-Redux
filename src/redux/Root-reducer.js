import { combineReducers } from "redux";
import usersReducers from "./Reducer";

const rootReducer = combineReducers({
  data: usersReducers,
});
export default rootReducer;
