import axios from "axios";
import { asyncActions } from "../utils/asyncUtil";
import { LOG_IN, LOG_OUT } from "../actionTypes/userActionType";
import { userConstants } from "../constants/constants";
import auth from "../helper/auth";
import { history } from "../helper/history";

export const loginUser = (user) => async (dispatch) => {
  dispatch(asyncActions(LOG_IN).loading(true));

  try {
    const payload = user;

    const response = await axios.post(userConstants.LOG_IN, payload);

    if (response.status === 200) {
      //console.log(response.data.returnObject);
      auth.saveUserDetails(response.data.returnObject);

      dispatch(asyncActions(LOG_IN).success(response.data.returnObject));
      dispatch(asyncActions(LOG_IN).loading(false));
      history.push("/");
    }
  } catch (error) {
    //console.log("error", error.response);
    if (error.response.status === 401) {
      dispatch(asyncActions(LOG_IN).failure(true, error.response.data));
    } else if (error.response.status === 400) {
      dispatch(
        asyncActions(LOG_IN).failure(
          true,
          "Please Enter  a Username or Password"
        )
      );
    } else {
      dispatch(asyncActions(LOG_IN).failure(true, error.message));
    }
    dispatch(asyncActions(LOG_IN).loading(false));
  }
};

export const signOut = () => (dispatch) => {
  auth.logUserOut();
  history.push("/");
  dispatch({ type: LOG_OUT });
};
