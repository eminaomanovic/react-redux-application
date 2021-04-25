/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_MOVIES_ERROR,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES,
} from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  popularMovies: null,
  popularTvShows: null,
});

function videoListReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MOVIES:
      return state.set('loading', true);
    case LOAD_MOVIES_SUCCESS:
      return state
        .set('loading', false)
        .set('popularTvShows', action.popularTvShows)
        .set('popularMovies', action.popularMovies);
    case LOAD_MOVIES_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default videoListReducer;
