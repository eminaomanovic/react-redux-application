import {
  changeTerm,
  loadMovies,
  moviesLoaded,
  moviesLoadingError,
} from '../actions';
import {
  LOAD_MOVIES,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_ERROR,
  CHANGE_TERM,
} from '../constants';

describe('HomePage actions', () => {
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

  it('CHANGE_TERM action test', () => {
    const term = '9090';
    const expectedResult = {
      type: CHANGE_TERM,
      term,
    };
    expect(changeTerm(term)).toEqual(expectedResult);
  });
  it('should return the correct type', () => {
    const movies = {
      popularMovies: [
        {
          id: 475557,
          original_title: 'Joker',
          overview: 'overview',
          poster_path: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
          release_date: '2019-10-02',
          vote_average: '8.8',
        },
      ],
      popularTvShows: [
        {
          id: 475557,
          original_title: 'Joker',
          overview: 'overview',
          poster_path: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
          release_date: '2019-10-02',
          vote_average: '8.8',
        },
      ],
    };
    const { popularMovies, popularTvShows } = movies;
    const expectedResult = {
      type: LOAD_MOVIES_SUCCESS,
      popularMovies,
      popularTvShows,
    };

    expect(moviesLoaded(popularMovies, popularTvShows)).toEqual(expectedResult);
  });
});
