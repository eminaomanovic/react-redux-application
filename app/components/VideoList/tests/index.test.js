/**
 *
 * Tests for VideoList
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from '@testing-library/react';
import VideoList from '../index';

describe('<VideoList />', () => {
  it('expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<VideoList />);
    expect(spy).not.toHaveBeenCalled();
  });
});
