import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homePage state domain
 */

const selectHomePageDomain = state => state.homePage || initialState;

const makeSelectLoading = () =>
  createSelector(
    selectHomePageDomain,
    homePage => homePage.get('loading'),
  );

const makeSelectError = () =>
  createSelector(
    selectHomePageDomain,
    homePage => homePage.get('error'),
  );

const makeSelectPopularMovies = () =>
  createSelector(
    selectHomePageDomain,
    homePage => homePage.get('popularMovies'),
  );

const makeSelectPopularTvShows = () =>
  createSelector(
    selectHomePageDomain,
    homePage => homePage.get('popularTvShows'),
  );

const makeSelectHomePage = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate,
  );

export default makeSelectHomePage;
export {
  selectHomePageDomain,
  makeSelectLoading,
  makeSelectError,
  makeSelectPopularMovies,
  makeSelectPopularTvShows,
};
