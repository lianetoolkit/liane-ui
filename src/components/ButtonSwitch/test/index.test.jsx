import React from 'react';
import { shallow, mount } from 'enzyme';
import { ButtonSwitch } from '../index';

describe('ButtonSwitch', () => {
  it('should render correctly', () => {
    const component = shallow(<ButtonSwitch />);
    expect(component).toMatchSnapshot();
  });
});
