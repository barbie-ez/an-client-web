import { combineReducers } from "redux";

import user from "../reducers/userReducer";

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
