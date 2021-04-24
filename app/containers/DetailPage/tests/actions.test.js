import { LOAD_MOVIE, LOAD_MOVIE_ERROR, MOVIE_LOADED } from '../constants';
import { loadMovieWithId, movieLoaded, movieLoadingError } from '../actions';

describe('Detail page actions', () => {
  it('LOAD MOVIE action test', () => {
    const id = '9090';
    const expectedResult = {
      type: LOAD_MOVIE,
      id,
    };

    expect(loadMovieWithId(id)).toEqual(expectedResult);
  });
  it('MOVIE_LOADED action test', () => {
    const movieLink = 'https://www.youtube.com/watch?v=t433PEQGErc\n';
    const movie = {
      id: 475557,
      original_title: 'Joker',
      overview: 'overview',
      poster_path: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
      release_date: '2019-10-02',
      vote_average: '8.8',
    };
    const expectedResult = {
      type: MOVIE_LOADED,
      movie,
      movieLink,
    };

    expect(movieLoaded(movie, movieLink)).toEqual(expectedResult);
  });
  it('LOAD_MOVIE_ERROR action test', () => {
    const error = '9090';
    const expectedResult = {
      type: LOAD_MOVIE_ERROR,
      error,
    };
    expect(movieLoadingError(error)).toEqual(expectedResult);
  });
});
