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
  it('should select the global state', () => {
    const globalState = fromJS({
      loading: false,
      error: false,
      popularMovies: null,
      popularTvShows: null,
    });
    const mockedState = {
      global: globalState,
    };
    expect(selectVideoListDomain(mockedState)).toEqual(globalState);
  });
  it('makeSelectLoading test', () => {
    const loading = false;
    const mockedState = {
      global: {
        loading,
      },
    };
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
  it('makeSelectError test', () => {
    const error = false;
    const mockedState = {
      global: {
        error,
      },
    };
    expect(errorSelector(mockedState)).toEqual(error);
  });
  it('makeSelectPopularMovies test', () => {
    const popularMovies = null;
    const mockedState = {
      global: {
        popularMovies,
      },
    };
    expect(prettyFormat(movieSelectorPopularMovies(mockedState))).toEqual(
      prettyFormat(popularMovies),
    );
  });
  it('movieSelectorPopularTvShows test', () => {
    const popularTvShows = null;
    const mockedState = {
      global: {
        popularTvShows,
      },
    };
    expect(prettyFormat(movieSelectorPopularTvShows(mockedState))).toEqual(
      prettyFormat(popularTvShows),
    );
  });
});
