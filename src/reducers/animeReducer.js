import { asyncActionName } from "../utils/asyncUtil";
import {
  CREATE_ANIME,
  VIEW_ANIME,
  VIEW_ALL_ANIMES,
} from "../actionTypes/animeActionType";
import { act } from "react-dom/test-utils";

const initState = {
  anime: [],
  anime: {},
  loading: false,
  error: false,
  errorMessage: null,
};

const animeReducer = (state = initState, action) => {
  switch (action.type) {
    case asyncActionName(CREATE_ANIME).failure:
      return {
        ...state,
        error: action.payload.status,
        errorMessage: action.payload.error,
      };
    case asyncActionName(CREATE_ANIME).loading:
      return { ...state, loading: action.payload };

    case asyncActionName(CREATE_ANIME).success:
      return {
        ...state,
        anime: action.payload.anime,
      };

    case asyncActionName(VIEW_ANIME).failure:
      return {
        ...state,
        error: action.payload.status,
        errorMessage: action.payload.error,
      };

    case asyncActionName(VIEW_ANIME).loading:
      return { ...state, loading: action.payload };

    case asyncActionName(VIEW_ANIME).success:
      return {
        ...state,
        anime: action.payload,
      };

    case asyncActionName(VIEW_ALL_ANIMES).failure:
      return {
        ...state,
        error: action.payload.status,
        errorMessage: action.payload.error,
      };

    case asyncActionName(VIEW_ALL_ANIMES).loading:
      return { ...state, loading: action.payload };

    case asyncActionName(VIEW_ALL_ANIMES).success:
      return {
        ...state,
        animes: action.payload,
      };
    default:
      return state;
  }
};

export default animeReducer;
