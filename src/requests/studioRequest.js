import axios from "axios";

import { asyncActions } from "../utils/asyncUtil";
import auth from "../helper/auth";
import {
  CREATE_STUDIO,
  VIEW_STUDIO,
  VIEW_ALL_STUDIOS,
  VIEW_STUDIO_WITH_ANIME,
} from "../actionTypes/studioActionType";
import { viewStudioConstants, studioConstants } from "../constants/constants";

export const createStudio = (studio) => async (dispatch) => {
  dispatch(asyncActions(CREATE_STUDIO).loading(true));
  try {
    const response = axios.post(studioConstants.CREATE_STUDIO, studio, {
      headers: { Authorization: auth.fetchToken() },
    });
    if (response.status === 201) {
      dispatch(asyncActions(CREATE_STUDIO).success(response.data));
      dispatch(asyncActions(CREATE_STUDIO).loading(false));
    }
  } catch (error) {
    if (error.response.status === 401) {
      dispatch(asyncActions(CREATE_STUDIO).failure(true, error.response.data));
    } else {
      dispatch(asyncActions(CREATE_STUDIO).failure(true, error.message));
    }
    dispatch(asyncActions(CREATE_STUDIO).loading(false));
  }
};

export const viewStudio = (id) => async (dispatch) => {
  dispatch(asyncActions(VIEW_STUDIO).loading(true));
  try {
    const response = axios.get(viewStudioConstants(id).VIEW_STUDIO, {
      id,
      headers: { Authorization: auth.fetchToken() },
    });

    if (response.status === 200) {
      dispatch(asyncActions(VIEW_STUDIO).success(response.data));
      dispatch(asyncActions(VIEW_STUDIO).loading(false));
    }
  } catch (error) {
    if (error.response.status === 401) {
      dispatch(asyncActions(VIEW_STUDIO).failure(true, error.response.data));
    } else {
      dispatch(asyncActions(VIEW_STUDIO).failure(true, error.message));
    }
    dispatch(asyncActions(VIEW_STUDIO).loading(false));
  }
};

export const viewStudioWithAnime = (id) => async (dispatch) => {
  dispatch(asyncActions(VIEW_STUDIO_WITH_ANIME).loading(true));
  try {
    const response = axios.get(viewStudioConstants(id).VIEW_STUDIO_WITH_ANIME, {
      id,
      headers: { Authorization: auth.fetchToken() },
    });

    if (response.status === 200) {
      dispatch(asyncActions(VIEW_STUDIO_WITH_ANIME).success(response.data));
      dispatch(asyncActions(VIEW_STUDIO_WITH_ANIME).loading(false));
    }
  } catch (error) {
    if (error.response.status === 401) {
      dispatch(
        asyncActions(VIEW_STUDIO_WITH_ANIME).failure(true, error.response.data)
      );
    } else {
      dispatch(
        asyncActions(VIEW_STUDIO_WITH_ANIME).failure(true, error.message)
      );
    }
    dispatch(asyncActions(VIEW_STUDIO_WITH_ANIME).loading(false));
  }
};

export const viewAllStudio = () => async (dispatch) => {
  dispatch(asyncActions(VIEW_ALL_STUDIOS).loading(true));
  try {
    const response = axios.get(studioConstants.VIEW_ALL_STUDIOS, {
      headers: { Authorization: auth.fetchToken() },
    });
    if (response.status === 200) {
      dispatch(asyncActions(VIEW_ALL_STUDIOS).success(response.data));
      dispatch(asyncActions(VIEW_ALL_STUDIOS).loading(false));
    }
  } catch (error) {
    if (error.response.status === 401) {
      dispatch(
        asyncActions(VIEW_ALL_STUDIOS).failure(true, error.response.data)
      );
    } else {
      dispatch(asyncActions(VIEW_ALL_STUDIOS).failure(true, error.message));
    }
    dispatch(asyncActions(VIEW_ALL_STUDIOS).loading(false));
  }
};
