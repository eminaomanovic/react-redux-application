import { testSaga } from 'redux-saga-test-plan';
import homePageSaga, { getMovies } from '../saga';

describe('HomePage saga tests', () => {
  it('Test getMovies generator', () => {
    const saga = testSaga(homePageSaga);
    saga
      .next()
      .takeLatest('app/HomePage/LOAD_MOVIES', getMovies)
      .finish();
  });
  it('Fetches the movies with error', () => {
    const generator = getMovies();
    expect(generator.next().value.type).toEqual('ALL');
    expect(generator.next().value.payload.action.type).toEqual(
      'app/HomePage/LOAD_MOVIES_ERROR',
    );
  });
});
