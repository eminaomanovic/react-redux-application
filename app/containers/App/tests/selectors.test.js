import { fromJS } from 'immutable';
import { selectGlobal, makeSelectLoading, makeSelectError } from '../selectors';

describe('selectGlobal', () => {
  const loadingSelector = makeSelectLoading();
  const errorSelector = makeSelectError();
  const mockedState = fromJS({
    loading: false,
    error: false,
  });

  it('should select the global state', () => {
    const globalState = {
      loading: false,
      error: false,
    };
    expect(selectGlobal(mockedState)).toEqual(globalState);
  });
  it('makeSelectLoading test', () => {
    const loading = false;
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
  it('makeSelectError test', () => {
    const error = false;
    expect(errorSelector(mockedState)).toEqual(error);
  });
});
