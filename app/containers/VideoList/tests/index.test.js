import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import '../../../setupTests';
import { VideoList } from '../index';
import configureStore from '../../../configureStore';
import { videoListProps } from '../../../utils/mocks';

describe('<VideoList />', () => {
  const store = configureStore();
  it('React testing library: Find div with class', () => {
    const { container } = render(
      <Provider store={store}>
        <VideoList {...videoListProps} />
      </Provider>,
    );
    expect(container.firstChild.classList).toContain('d-flex');
  });

  it('Enzyme: Find div with class', () => {
    const wrapper = mount(
      <Provider store={store}>
        <VideoList {...videoListProps} />
      </Provider>,
    );
    expect(
      wrapper
        .find('div')
        .first()
        .prop('className'),
    ).toContain('d-flex');
  });
});
