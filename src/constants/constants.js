const BASE_URL = process.env.REACT_APP_API_URL;

export const userConstants = {
  REGISTER: `${BASE_URL}/user/register`,
  LOG_IN: `${BASE_URL}/user/login`,
};

export const animeConstants = {
  CREATE_ANIME: `${BASE_URL}/anime`,
  VIEW_ALL_ANIMES: `${BASE_URL}/anime`,
};

export const viewAnimeConstants = (id) => ({
  VIEW_ANIME: `${BASE_URL}/anime/${id}`,
});

export const studioConstants = {
  CREATE_STUDIO: `${BASE_URL}/studio`,
  VIEW_ALL_STUDIOS: `${BASE_URL}/studio`,
};

export const viewStudioConstants = (id) => ({
  VIEW_STUDIO: `${BASE_URL}/studio/${id}`,
  VIEW_STUDIO_WITH_ANIME: `${BASE_URL}/studio/${id}/anime`,
});

export const genreConstants = {
  CREATE_GENRE: `${BASE_URL}/genre`,
  VIEW_ALL_GENRE: `${BASE_URL}/genre`,
};

export const viewGenreConstants = (id) => ({
  VIEW_GENRE: `${BASE_URL}/genre/${id}`,
  VIEW_GENRE_WITH_ANIME: `${BASE_URL}/genre/${id}/anime`,
});
