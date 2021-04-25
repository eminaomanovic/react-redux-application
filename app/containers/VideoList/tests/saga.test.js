import { testSaga } from 'redux-saga-test-plan';
import videoListSaga, { getMovies } from '../saga';

describe('VideoList saga tests', () => {
  it('Test getMovies generator', () => {
    const saga = testSaga(videoListSaga);
    saga
      .next()
      .takeLatest('app/VideoList/LOAD_MOVIES', getMovies)
      .finish();
  });
  it('Fetches the movies with error', () => {
    const generator = getMovies();
    expect(generator.next().value.type).toEqual('SELECT');
    expect(generator.next().value.type).toEqual('ALL');
    expect(generator.next().value.payload.action.type).toEqual(
      'app/VideoList/LOAD_MOVIES_ERROR',
    );
  });
});
