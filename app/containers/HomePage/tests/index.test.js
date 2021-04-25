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
import configureStore from '../../../configureStore';
import { HomePage } from '../index';
import { homePageProps } from '../../../utils/mocks';

describe('<HomePage />', () => {
  const store = configureStore();
  it('should render without throwing an error', () => {
    const wrapper = mount(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );
    expect(wrapper.find('[data-testid="nesto"]').exists()).toBeTruthy();
  });
  it('React testing library: should call ', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <HomePage {...homePageProps} />
      </Provider>,
    );
    const input = getByRole('searchbox');
    userEvent.type(input, 'New term');
    expect(homePageProps.onChangeTerm).toHaveBeenCalled();
  });
});
