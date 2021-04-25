import { fromJS } from 'immutable';
import { selectHomePageDomain, makeSelectTerm } from '../selectors';

describe('HomePage selectors unit tests', () => {
  const termSelector = makeSelectTerm();
  it('should select the global state', () => {
    const globalState = fromJS({
      term: '',
    });
    const mockedState = {
      global: globalState,
    };
    expect(selectHomePageDomain(mockedState)).toEqual(globalState);
  });
  it('makeSelectTerm test', () => {
    const term = '';
    const mockedState = {
      global: {
        term,
      },
    };
    expect(termSelector(mockedState)).toEqual(term);
  });
});
