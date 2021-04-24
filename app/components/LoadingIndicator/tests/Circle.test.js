import React from 'react';
import { render } from '@testing-library/react';

import Circle from '../Circle';

describe('<Circle />', () => {
  it('should render an <div> tag', () => {
    const { container } = render(<Circle />);
    expect(container.firstChild.tagName).toEqual('DIV');
  });

  it('should have a class attribute', () => {
    const { container } = render(<Circle />);
    expect(container.firstChild.hasAttribute('class')).toBe(true);
  });
});
