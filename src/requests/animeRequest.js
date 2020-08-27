import axios from "axios";

import { CREATE_ANIME, VIEW_ALL_ANIMES } from "../actionTypes/animeActionType";
import { asyncActions } from "../utils/asyncUtil";
import { animeConstants, viewAnimeConstants } from "../constants/constants";
import auth from "../helper/auth";

export const createAnime = (anime) => async (dispatch) => {
  dispatch(asyncActions(CREATE_ANIME).loading(true));
  try {
    const response = axios.post(animeConstants.CREATE_ANIME, anime, {
      headers: { Authorization: auth.fetchToken() },
    });
    if (response.status === 201) {
      dispatch(asyncActions(CREATE_ANIME).success(response.data));
      dispatch(asyncActions(CREATE_ANIME).loading(false));
    }
  } catch (error) {
    if (error.response.status === 401) {
      dispatch(asyncActions(CREATE_ANIME).failure(true, error.response.data));
    } else {
      dispatch(asyncActions(CREATE_ANIME).failure(true, error.message));
    }
    dispatch(asyncActions(CREATE_ANIME).loading(false));
  }
};

export const viewAnime = (id) => async (dispatch) => {
  dispatch(asyncActions(VIEW_ANIME).loading(true));
  try {
    const response = axios.get(viewAnimeConstants(id).VIEW_ANIME, {
      id,
      headers: { Authorization: auth.fetchToken() },
    });

    if (response.status === 200) {
      dispatch(asyncActions(VIEW_ANIME).success(response.data));
      dispatch(asyncActions(VIEW_ANIME).loading(false));
    }
  } catch (error) {
    if (error.response.status === 401) {
      dispatch(asyncActions(VIEW_ANIME).failure(true, error.response.data));
    } else {
      dispatch(asyncActions(VIEW_ANIME).failure(true, error.message));
    }
    dispatch(asyncActions(VIEW_ANIME).loading(false));
  }
};

export const viewAllAnime = () => async (dispatch) => {
  dispatch(asyncActions(VIEW_ALL_ANIMES).loading(true));
  try {
    const response = axios.get(animeConstants.VIEW_ALL_ANIMES, {
      headers: { Authorization: auth.fetchToken() },
    });
    if (response.status === 200) {
      dispatch(asyncActions(VIEW_ALL_ANIMES).success(response.data));
      dispatch(asyncActions(VIEW_ALL_ANIMES).loading(false));
    }
  } catch (error) {
    if (error.response.status === 401) {
      dispatch(
        asyncActions(VIEW_ALL_ANIMES).failure(true, error.response.data)
      );
    } else {
      dispatch(asyncActions(VIEW_ALL_ANIMES).failure(true, error.message));
    }
    dispatch(asyncActions(VIEW_ALL_ANIMES).loading(false));
  }
};
