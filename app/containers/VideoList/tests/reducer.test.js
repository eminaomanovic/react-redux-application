import { fromJS } from 'immutable';
import { loadMovies, moviesLoaded, moviesLoadingError } from '../actions';
import videoListReducer from '../reducer';
const prettyFormat = require('pretty-format'); // CommonJS
describe('homePageReducer', () => {
  const stateMutable = {
    loading: false,
    error: false,
    popularMovies: null,
    popularTvShows: null,
  };
  const state = fromJS(stateMutable);

  it('returns the initial state', () => {
    expect(videoListReducer(undefined, {})).toEqual(state);
  });

  it('should handle the LOAD_MOVIES action correctly', () => {
    stateMutable.loading = true;
    expect(videoListReducer(state, loadMovies())).toEqual(fromJS(stateMutable));
  });

  it('should handle the LOAD_MOVIES_SUCCESS action correctly', () => {
    stateMutable.loading = false;
    stateMutable.popularTvShows = null;
    stateMutable.popularTvShows = null;
    expect(
      prettyFormat(videoListReducer(state, moviesLoaded(null, null))),
    ).toEqual(prettyFormat(fromJS(stateMutable)));
  });
  it('should handle the LOAD_MOVIES_ERRORS action correctly', () => {
    stateMutable.loading = false;
    stateMutable.error = false;
    expect(videoListReducer(state, moviesLoadingError(false, false))).toEqual(
      fromJS(stateMutable),
    );
  });
});
