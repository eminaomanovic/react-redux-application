/**
 *
 * Tests for VideoItem
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { assertPropTypes } from 'check-prop-types';

import '../../../setupTests';
import { shallow, mount } from 'enzyme';

import VideoItem from '../index';
import { mockedVideo, mockedVideoNoReleaseDate } from '../../../utils/mocks';

describe('VideoItem index tests', () => {
  it('React testing library: Check link existence', () => {
    const { getAllByRole } = render(<VideoItem video={mockedVideo} />);
    getAllByRole('link');
    expect(getAllByRole('link')).toHaveLength(1);
  });

  it('Enzyme: Check link existence', () => {
    const component = shallow(<VideoItem video={mockedVideo} />);
    expect(component.find('Link').exists()).toBeTruthy();
    expect(component.find('Link').length).toEqual(1);
  });

  it('React testing library: Check link element classes', () => {
    const { container } = render(<VideoItem video={mockedVideo} />);
    expect(container.firstChild).toHaveClass(
      'video-item item shadow-lg d-flex flex-column',
    );
  });

  it('Enzyme: Check link element classes', () => {
    const component = mount(<VideoItem video={mockedVideoNoReleaseDate} />);
    expect(
      component
        .find('Link')
        .first()
        .props().className,
    ).toEqual('video-item item shadow-lg d-flex flex-column');
  });

  it('React testing library: should render img', () => {
    const { getAllByTestId, getByAltText } = render(
      <VideoItem video={mockedVideo} />,
    );
    expect(getAllByTestId('video-img')).toHaveLength(1);
    getByAltText('Overview part');
  });

  it('Enzyme: should render img', () => {
    const component = shallow(<VideoItem video={mockedVideo} />);
    expect(component.find('[data-testid="video-img"]').exists()).toBeTruthy();
    expect(component.find('[data-testid="video-img"]').prop('alt')).toEqual(
      'Overview part',
    );
  });

  it('React testing library: should render false date', () => {
    const { getByText } = render(
      <VideoItem video={mockedVideoNoReleaseDate} />,
    );
    getByText('No release date available');
  });

  it('Enzyme: should render false date', () => {
    const component = mount(<VideoItem video={mockedVideoNoReleaseDate} />);
    expect(
      component
        .find('Link')
        .first()
        .props().children[3].props.children,
    ).toEqual('No release date available');
  });

  it('Check prop types', () => {
    assertPropTypes(VideoItem.propTypes, mockedVideo, 'prop', VideoItem.name);
  });
});
