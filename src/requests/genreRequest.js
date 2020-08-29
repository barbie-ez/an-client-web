import axios from "axios";

import { asyncActions } from "../utils/asyncUtil";
import auth from "../helper/auth";
import {
  CREATE_GENRE,
  VIEW_ALL_GENRES,
  VIEW_GENRE_WITH_ANIME,
  VIEW_GENRE,
} from "../actionTypes/genreActionType";
import { genreConstants, viewGenreConstants } from "../constants/constants";

export const createGenre = (genre) => async (dispatch) => {
  dispatch(asyncActions(CREATE_GENRE).loading(true));
  try {
    const response = await axios.post(genreConstants.CREATE_GENRE, genre, {
      headers: { Authorization: `Bearer ${auth.fetchToken()} ` },
    });
    if (response.status === 201) {
      dispatch(asyncActions(CREATE_GENRE).success(response.data.returnObject));
      dispatch(asyncActions(CREATE_GENRE).loading(false));
    }
  } catch (error) {
    if (error.response.status === 401) {
      dispatch(
        asyncActions(CREATE_GENRE).failure(
          true,
          error.response.data.returnObject
        )
      );
    } else {
      dispatch(asyncActions(CREATE_GENRE).failure(true, error.message));
    }
    dispatch(asyncActions(CREATE_GENRE).loading(false));
  }
};

export const viewGenre = (id) => async (dispatch) => {
  dispatch(asyncActions(VIEW_GENRE).loading(true));
  try {
    const response = await axios.get(viewGenreConstants(id).VIEW_GENRE, {
      id,
      headers: { Authorization: `Bearer ${auth.fetchToken()} ` },
    });

    if (response.status === 200) {
      dispatch(asyncActions(VIEW_GENRE).success(response.data.returnObject));
      dispatch(asyncActions(VIEW_GENRE).loading(false));
    }
  } catch (error) {
    if (error.response.status === 401) {
      dispatch(
        asyncActions(VIEW_GENRE).failure(true, error.response.data.returnObject)
      );
    } else {
      dispatch(asyncActions(VIEW_GENRE).failure(true, error.message));
    }
    dispatch(asyncActions(VIEW_GENRE).loading(false));
  }
};

export const viewGenreWithAnime = (id) => async (dispatch) => {
  dispatch(asyncActions(VIEW_GENRE_WITH_ANIME).loading(true));
  try {
    const response = await axios.get(
      viewGenreConstants(id).VIEW_GENRE_WITH_ANIME,
      {
        id,
        headers: { Authorization: `Bearer ${auth.fetchToken()} ` },
      }
    );

    if (response.status === 200) {
      dispatch(
        asyncActions(VIEW_GENRE_WITH_ANIME).success(response.data.returnObject)
      );
      dispatch(asyncActions(VIEW_GENRE_WITH_ANIME).loading(false));
    }
  } catch (error) {
    if (error.response.status === 401) {
      dispatch(
        asyncActions(VIEW_GENRE_WITH_ANIME).failure(
          true,
          error.response.data.returnObject
        )
      );
    } else {
      dispatch(
        asyncActions(VIEW_GENRE_WITH_ANIME).failure(true, error.message)
      );
    }
    dispatch(asyncActions(VIEW_GENRE_WITH_ANIME).loading(false));
  }
};

export const viewAllGenre = () => async (dispatch) => {
  dispatch(asyncActions(VIEW_ALL_GENRES).loading(true));
  try {
    const response = await axios.get(genreConstants.VIEW_ALL_GENRE, {
      headers: { Authorization: `Bearer ${auth.fetchToken()} ` },
    });
    if (response.status === 200) {
      dispatch(
        asyncActions(VIEW_ALL_GENRES).success(response.data.returnObject)
      );
      dispatch(asyncActions(VIEW_ALL_GENRES).loading(false));
    }
  } catch (error) {
    if (error.response.status === 401) {
      dispatch(
        asyncActions(VIEW_ALL_GENRES).failure(
          true,
          error.response.data.returnObject
        )
      );
    } else {
      dispatch(asyncActions(VIEW_ALL_GENRES).failure(true, error.message));
    }
    dispatch(asyncActions(VIEW_ALL_GENRES).loading(false));
  }
};
