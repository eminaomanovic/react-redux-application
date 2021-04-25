import { loadMovies, moviesLoaded, moviesLoadingError } from '../actions';
import {
  LOAD_MOVIES,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_ERROR,
} from '../constants';
import { movies } from '../../../utils/mocks';

describe('VideoList actions', () => {
  it('LOAD_MOVIES action test', () => {
    const expected = {
      type: LOAD_MOVIES,
    };
    expect(loadMovies()).toEqual(expected);
  });

  it('LOAD_MOVIES_ERROR action test', () => {
    const error = 'Something went wrong';
    const expectedResult = {
      type: LOAD_MOVIES_ERROR,
      error,
    };
    expect(moviesLoadingError(error)).toEqual(expectedResult);
  });
  it('LOAD_MOVIES_SUCCESS action test', () => {
    const { popularMovies, popularTvShows } = movies;
    const expectedResult = {
      type: LOAD_MOVIES_SUCCESS,
      popularMovies,
      popularTvShows,
    };
    expect(moviesLoaded(popularMovies, popularTvShows)).toEqual(expectedResult);
  });
});
