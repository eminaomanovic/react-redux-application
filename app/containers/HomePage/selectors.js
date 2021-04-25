import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homePage state domain
 */

const selectHomePageDomain = state => state.homePage || initialState;

const makeSelectHomePage = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate,
  );

const makeSelectTerm = () =>
  createSelector(
    selectHomePageDomain,
    homePage => homePage.get('term'),
  );
export default makeSelectHomePage;
export { selectHomePageDomain, makeSelectTerm };
