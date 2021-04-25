import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import '../../../setupTests';
import { DetailPage } from '../index';
import configureStore from '../../../configureStore';
import { detailsPageProps } from '../../../utils/mocks';

describe('<DetailsPage />', () => {
  const store = configureStore();
  it('React testing library: Test input in search box ', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <DetailPage {...detailsPageProps} />
      </Provider>,
    );
    const link = getByRole('link');
    expect(link).toBeDefined();
  });

  it('Enzyme: Test input in search box ', () => {
    const wrapper = mount(
      <Provider store={store}>
        <DetailPage {...detailsPageProps} />
      </Provider>,
    );
    const link = wrapper.find('Link');
    expect(link).toBeDefined();
  });
});
