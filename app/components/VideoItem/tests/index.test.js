/**
 *
 * Tests for VideoItem
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import ReactDOM from 'react-dom';
import VideoItem from '../index';

let container;
let props;
beforeEach(() => {
  container = document.createElement('Link');
  props = {
    video: {
      original_title: 'Mad Hot Ballroom',
      release_date: '2005-05-13',
      overview: 'Overview',
      id: 14358,
      poster_path: '/cVnBICXmyqlusz1iYvjvIOHxo5U.jpg',
    },
  };
  container.to = `/detailPage/movie/${props.video.id}`;
});

describe('<VideoItem />', () => {
  it('expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<VideoItem />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should render title', () => {
    const { getByTestId } = render(<VideoItem props={props} />);
    getByTestId('linkVideo');
  });

  it('should render image', () => {
    act(() => {
      const movieImageUrl = `https://image.tmdb.org/t/p/w500${
        props.video.poster_path
      }`;
      ReactDOM.render(
        <img
          className="ui image"
          alt={props.video.original_title}
          src={movieImageUrl}
        />,
        container,
      );
    });
  });

  it('should render date', () => {
    act(() => {
      const date = props.video
        ? props.video.first_air_date || props.video.release_date
        : null;
      const formattedDate = date ? date.toString().split('-')[0] : null;
      ReactDOM.render(<div>{formattedDate}</div>, container);
    });
  });

  it('should check props.video', () => {
    expect(container.to).toBe(`/detailPage/movie/${props.video.id}`);
  });

  it('should render with props.video', () => {
    const { getByTestId } = render(<VideoItem video={props.video} />);
    getByTestId('linkVideo');
  });
});
