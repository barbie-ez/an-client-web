import { LOG_IN, LOG_OUT } from "../actionTypes/userActionType";
import { asyncActionName } from "../utils/asyncUtil";
const initState = {
  user: {},
  //token: null,
  loading: false,
  error: false,
  errorMessage: null,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case asyncActionName(LOG_IN).loading: {
      return { ...state, loading: action.payload };
    }
    case asyncActionName(LOG_IN).failure: {
      return {
        ...state,
        error: action.payload.status,
        errorMessage: action.payload.error,
      };
    }
    case asyncActionName(LOG_IN).success: {
      return {
        ...state,
        //token: action.payload.user.token,
        user: action.payload,
      };
    }

    case LOG_OUT: {
      return { ...initState };
    }

    default:
      return state;
  }
};

export default userReducer;
