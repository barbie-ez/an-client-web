import axios from "axios";
import { asyncActions } from "../utils/asyncUtil";
import { LOG_IN, LOG_OUT } from "../actionTypes/userActionType";
import { userConstants } from "../constants/constants";
import auth from "../helper/auth";

export const loginUser = (user) => async (dispatch) => {
  dispatch(asyncActions(LOG_IN).loading(true));

  try {
    const payload = user;
    console.log(payload);
    const response = await axios.post(userConstants.LOG_IN, payload);

    if (response.status === 200) {
      auth.saveUserDetails(response.data);
      dispatch(asyncActions(LOG_IN).success(response.data));
      dispatch(asyncActions(LOG_IN).loading(false));
    }
  } catch (error) {
    //console.log("error", error.response);
    if (error.response.status === 401) {
      dispatch(asyncActions(LOG_IN).failure(true, error.response.data));
    } else {
      dispatch(asyncActions(LOG_IN).failure(true, error.message));
    }
    dispatch(asyncActions(LOG_IN).loading(false));
  }
};

export const signOut = () => (dispatch) => {
  auth.logUserOut();
  dispatch({ type: LOG_OUT });
};
