import { fromJS } from 'immutable';
import {
  selectVideoListDomain,
  makeSelectLoading,
  makeSelectError,
  makeSelectPopularMovies,
  makeSelectPopularTvShows,
} from '../selectors';
const prettyFormat = require('pretty-format'); // CommonJS

describe('VideoList selectors unit tests', () => {
  const loadingSelector = makeSelectLoading();
  const errorSelector = makeSelectError();
  const movieSelectorPopularMovies = makeSelectPopularMovies();
  const movieSelectorPopularTvShows = makeSelectPopularTvShows();
  const globalState = fromJS({
    loading: false,
    error: false,
    popularMovies: null,
    popularTvShows: null,
  });
  it('should select the global state', () => {
    const mockedState = {
      global: globalState,
    };
    expect(selectVideoListDomain(mockedState)).toEqual(globalState);
  });
  it('makeSelectLoading test', () => {
    const loading = false;
    expect(loadingSelector(globalState)).toEqual(loading);
  });
  it('makeSelectError test', () => {
    const error = false;
    expect(errorSelector(globalState)).toEqual(error);
  });
  it('makeSelectPopularMovies test', () => {
    const popularMovies = null;
    expect(prettyFormat(movieSelectorPopularMovies(globalState))).toEqual(
      prettyFormat(popularMovies),
    );
  });
  it('movieSelectorPopularTvShows test', () => {
    const popularTvShows = null;
    expect(prettyFormat(movieSelectorPopularTvShows(globalState))).toEqual(
      prettyFormat(popularTvShows),
    );
  });
});
