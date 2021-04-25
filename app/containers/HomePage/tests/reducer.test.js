import { fromJS } from 'immutable';
import homePageReducer from '../reducer';
import { changeTerm } from '../actions';

describe('homePageReducer', () => {
  const stateMutable = {
    term: '',
  };
  const state = fromJS(stateMutable);
  it('returns the initial state', () => {
    expect(homePageReducer(undefined, {})).toEqual(state);
  });
  it('should handle the CHANGE_TERM action correctly', () => {
    stateMutable.term = 'new';
    expect(homePageReducer(state, changeTerm('new'))).toEqual(
      fromJS(stateMutable),
    );
  });
});
