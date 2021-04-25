/**
 *
 * Tests for HomePage
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import { VideoList } from '../index';
import '../../../setupTests';

describe('<VideoList />', () => {
  // it('Test mapDispatchToProps functionality', () => {
  //   const { container } = render(<HomePage {...homePageProps} />);
  //   const dispatch = jest.fn();
  //   mapDispatchToProps(dispatch).getMovies();
  //   fireEvent.load(container, container.getMovies);
  //   expect(homePageProps.getMovies).toHaveBeenCalledTimes(1);
  // });

  it('Enzyme: Check link existence', () => {
    const component = shallow(<VideoList />);
    expect(component.find('Link').exists()).toBeTruthy();
    expect(component.find('Link').length).toEqual(1);
  });
});
