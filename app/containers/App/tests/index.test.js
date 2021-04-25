import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import App from '../index';
import '../../../setupTests';
import configureStore from '../../../configureStore';

describe('<App />', () => {
  const store = configureStore();
  it('React testing library: Test input in search box ', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const input = getByTestId('app');
    expect(input).toBeDefined();
  });

  it('Enzyme: Test input in search box ', () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const input = wrapper.find('div');
    expect(input).toBeDefined();
  });
});
