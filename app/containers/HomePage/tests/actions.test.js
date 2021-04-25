import { changeTerm } from '../actions';
import { CHANGE_TERM } from '../constants';

describe('HomePage actions', () => {
  it('CHANGE_TERM action test', () => {
    const term = '9090';
    const expectedResult = {
      type: CHANGE_TERM,
      term,
    };
    expect(changeTerm(term)).toEqual(expectedResult);
  });
});
