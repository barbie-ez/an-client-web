import { combineReducers } from "redux";

import user from "../reducers/userReducer";
import anime from "../reducers/animeReducer";
import genre from "../reducers/genreReducer";
import studio from "../reducers/studioReducer";

const rootReducer = combineReducers({
  user,
  anime,
  studio,
  genre,
});

export default rootReducer;
