import { asyncActionName } from "../utils/asyncUtil";

import {
  CREATE_STUDIO,
  VIEW_STUDIO,
  VIEW_ALL_STUDIOS,
  VIEW_STUDIO_WITH_ANIME,
} from "../actionTypes/studioActionType";

const initState = {
  studios: [],
  studio: {},
  loading: false,
  error: false,
  errorMessage: null,
};

const studioReducer = (state = initState, action) => {
  switch (action.type) {
    case asyncActionName(CREATE_STUDIO).failure:
      return {
        ...state,
        error: action.payload.status,
        errorMessage: action.payload.error,
      };
    case asyncActionName(CREATE_STUDIO).loading:
      return { ...state, loading: action.payload };

    case asyncActionName(CREATE_STUDIO).success:
      return {
        ...state,
        studio: action.payload.studio,
      };

    case asyncActionName(VIEW_STUDIO).failure:
      return {
        ...state,
        error: action.payload.status,
        errorMessage: action.payload.error,
      };

    case asyncActionName(VIEW_STUDIO).loading:
      return { ...state, loading: action.payload };

    case asyncActionName(VIEW_STUDIO).success:
      return {
        ...state,
        studio: action.payload,
      };

    case asyncActionName(VIEW_ALL_STUDIOS).failure:
      return {
        ...state,
        error: action.payload.status,
        errorMessage: action.payload.error,
      };

    case asyncActionName(VIEW_ALL_STUDIOS).loading:
      return { ...state, loading: action.payload };

    case asyncActionName(VIEW_ALL_STUDIOS).success:
      return {
        ...state,
        studios: action.payload,
      };

    case asyncActionName(VIEW_STUDIO_WITH_ANIME).failure:
      return {
        ...state,
        error: action.payload.status,
        errorMessage: action.payload.error,
      };

    case asyncActionName(VIEW_STUDIO_WITH_ANIME).loading:
      return { ...state, loading: action.payload };

    case asyncActionName(VIEW_STUDIO_WITH_ANIME).success:
      return {
        ...state,
        studio: action.payload,
      };
    default:
      return state;
  }
};

export default studioReducer;
