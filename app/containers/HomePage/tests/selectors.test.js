import { fromJS } from 'immutable';
import {
  selectHomePageDomain,
  makeSelectLoading,
  makeSelectError,
  makeSelectPopularMovies,
  makeSelectPopularTvShows,
} from '../selectors';

describe('selectHomePageDomain', () => {
  it('should select the global state', () => {
    const globalState = fromJS({
      loading: false,
      error: false,
      popularMovies: null,
      popularTvShows: null,
      familyShows: null,
      documentaryMovies: null,
      allMovies: null,
      selectedVideo: null,
    });
    const mockedState = {
      global: globalState,
    };
    expect(selectHomePageDomain(mockedState)).toEqual(globalState);
  });
});

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading();
  it('should select the loading', () => {
    const loading = false;
    const mockedState = {
      global: {
        loading,
      },
    };
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select the error', () => {
    const error = false;
    const mockedState = {
      global: {
        error,
      },
    };
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('makeSelectPopularMovies', () => {
  const movieSelector = makeSelectPopularMovies();
  it('should select the movie link', () => {
    const popularMovies = null;
    const mockedState = {
      global: {
        popularMovies,
      },
    };
    expect(movieSelector(mockedState)).toEqual(popularMovies);
  });
});

describe('makeSelectPopularTvShows', () => {
  const movieSelector = makeSelectPopularTvShows();
  it('should select the movie type', () => {
    const popularTvShows = null;
    const mockedState = {
      global: {
        popularTvShows,
      },
    };
    expect(movieSelector(mockedState)).toEqual(popularTvShows);
  });
});
