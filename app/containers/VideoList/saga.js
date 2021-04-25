import { call, put, takeLatest, select } from 'redux-saga/effects';
import request from '../../utils/request';
import { moviesLoaded, moviesLoadingError } from './actions';
import { LOAD_MOVIES } from './constants';
import { filterByTerm } from '../../utils/utils';
import { makeSelectTerm } from '../HomePage/selectors';
import { requestArgs } from '../../utils/mocks';

export function* getMovies() {
  try {
    const term = yield select(makeSelectTerm());
    const popularMovies = yield call(
      request,
      'https://api.themoviedb.org/3/movie/popular?api_key=a8ff50b145b3742d52ef2fc9ce52264f',
      requestArgs,
    );
    const popularTvShows = yield call(
      request,
      'https://api.themoviedb.org/3/tv/popular?api_key=a8ff50b145b3742d52ef2fc9ce52264f',
      requestArgs,
    );
    yield put(
      moviesLoaded(
        filterByTerm(popularMovies.results, term),
        filterByTerm(popularTvShows.results, term),
      ),
    );
  } catch (err) {
    yield put(moviesLoadingError(err));
  }
}

export default function* videoListSaga() {
  yield takeLatest(LOAD_MOVIES, getMovies);
}
