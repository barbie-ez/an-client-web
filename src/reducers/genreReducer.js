import { asyncActionName } from "../utils/asyncUtil";
import {
  CREATE_GENRE,
  VIEW_GENRE,
  VIEW_ALL_GENRES,
  VIEW_GENRE_WITH_ANIME,
} from "../actionTypes/genreActionType";

const initState = {
  genres: [],
  genre: {},
  loading: false,
  error: false,
  errorMessage: null,
};

const genreReducer = (state = initState, action) => {
  switch (action.type) {
    case asyncActionName(CREATE_GENRE).failure:
      return {
        ...state,
        error: action.payload.status,
        errorMessage: action.payload.error,
      };
    case asyncActionName(CREATE_GENRE).loading:
      return { ...state, loading: action.payload };

    case asyncActionName(CREATE_GENRE).success:
      return {
        ...state,
        studio: action.payload.studio,
      };

    case asyncActionName(VIEW_GENRE).failure:
      return {
        ...state,
        error: action.payload.status,
        errorMessage: action.payload.error,
      };

    case asyncActionName(VIEW_GENRE).loading:
      return { ...state, loading: action.payload };

    case asyncActionName(VIEW_GENRE).success:
      return {
        ...state,
        genre: action.payload,
      };

    case asyncActionName(VIEW_ALL_GENRES).failure:
      return {
        ...state,
        error: action.payload.status,
        errorMessage: action.payload.error,
      };

    case asyncActionName(VIEW_ALL_GENRES).loading:
      return { ...state, loading: action.payload };

    case asyncActionName(VIEW_ALL_GENRES).success:
      return {
        ...state,
        genres: action.payload,
      };

    case asyncActionName(VIEW_GENRE_WITH_ANIME).failure:
      return {
        ...state,
        error: action.payload.status,
        errorMessage: action.payload.error,
      };

    case asyncActionName(VIEW_GENRE_WITH_ANIME).loading:
      return { ...state, loading: action.payload };

    case asyncActionName(VIEW_GENRE_WITH_ANIME).success:
      return {
        ...state,
        genre: action.payload,
      };
    default:
      return state;
  }
};

export default genreReducer;
