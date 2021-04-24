/*
 *
 * HomePage actions
 *
 */

import {
  CHANGE_TERM,
  LOAD_MOVIES,
  LOAD_MOVIES_ERROR,
  LOAD_MOVIES_SUCCESS,
} from './constants';

export function loadMovies() {
  return {
    type: LOAD_MOVIES,
  };
}

export function moviesLoadingError(error) {
  return {
    type: LOAD_MOVIES_ERROR,
    error,
  };
}
export function moviesLoaded(popularMovies, popularTvShows) {
  return {
    type: LOAD_MOVIES_SUCCESS,
    popularMovies,
    popularTvShows,
  };
}

export function changeTerm(term) {
  return {
    type: CHANGE_TERM,
    term,
  };
}
