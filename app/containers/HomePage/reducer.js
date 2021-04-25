/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import { fromJS } from 'immutable';
import { CHANGE_TERM } from './constants';

export const initialState = fromJS({
  term: '',
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TERM:
      return state.set('term', action.term);
    default:
      return state;
  }
}

export default homePageReducer;
