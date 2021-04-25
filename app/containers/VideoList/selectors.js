import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the VideoList state domain
 */

const selectVideoListDomain = state => state.videoList || initialState;

const makeSelectLoading = () =>
  createSelector(
    selectVideoListDomain,
    videoList => videoList.get('loading'),
  );

const makeSelectError = () =>
  createSelector(
    selectVideoListDomain,
    videoList => videoList.get('error'),
  );

const makeSelectPopularMovies = () =>
  createSelector(
    selectVideoListDomain,
    videoList => videoList.get('popularMovies'),
  );

const makeSelectPopularTvShows = () =>
  createSelector(
    selectVideoListDomain,
    videoList => videoList.get('popularTvShows'),
  );

const makeSelectVideoList = () =>
  createSelector(
    selectVideoListDomain,
    substate => substate,
  );

export default makeSelectVideoList;
export {
  selectVideoListDomain,
  makeSelectLoading,
  makeSelectError,
  makeSelectPopularMovies,
  makeSelectPopularTvShows,
};
