import { testSaga } from 'redux-saga-test-plan';
import { select, put } from 'redux-saga/effects';
import videoListSaga, { getMovies } from '../saga';
import { makeSelectTerm } from '../../HomePage/selectors';
import { moviesLoadingError } from '../actions';
const prettyFormat = require('pretty-format');

describe('VideoList saga tests', () => {
  it('Test getMovies generator', () => {
    const saga = testSaga(videoListSaga);
    saga
      .next()
      .takeLatest('app/VideoList/LOAD_MOVIES', getMovies)
      .finish();
  });
  it('Saga flow should be OK', () => {
    const generator = getMovies();
    expect(prettyFormat(generator.next().value)).toEqual(
      prettyFormat(select(makeSelectTerm())),
    );
    expect(generator.next().value.type).toEqual('CALL');
    expect(generator.next({ results: [] }).value.type).toEqual('CALL');
    expect(generator.next({ results: [] }).value.type).toEqual('PUT');
  });

  it('Saga flow should FAIL', () => {
    const generator = getMovies();
    generator.next();
    generator.next();
    generator.next();
    const err = 'Something went wrong';
    const expected = put(moviesLoadingError(err));
    const output = generator.throw(err);
    expect(output.value).toEqual(expected);
  });
});
