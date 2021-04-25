/**
 *
 * Tests for HomePage
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import '../../../setupTests';
import React from 'react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import { assertPropTypes } from 'check-prop-types';
import configureStore from '../../../configureStore';
import { HomePage } from '../index';
import { homePageProps } from '../../../utils/mocks';

describe('<HomePage />', () => {
  const store = configureStore();
  it('React testing library: Test input in search box ', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <HomePage {...homePageProps} />
      </Provider>,
    );
    const input = getByRole('searchbox');
    userEvent.type(input, 'New term');
    userEvent.clear(input);
    expect(homePageProps.onChangeTerm).toHaveBeenCalled();
  });

  it('Enzyme: Test input in search box ', () => {
    const wrapper = mount(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'New term' } });
    input.simulate('change', { target: { value: '' } });
  });
  it('Check prop types', () => {
    assertPropTypes(HomePage.propTypes, homePageProps, 'prop', HomePage.name);
  });
});
