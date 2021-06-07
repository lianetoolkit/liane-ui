import React from 'react';
import { shallow, mount } from 'enzyme';
import { Button } from './button';

describe('Button', () => {
  it('should render correctly', () => {
    const component = shallow(<Button />);
    expect(component).toMatchSnapshot();
  });
  it('should render button with given props', () => {
    const component = shallow(<Button type={'primary'} size={'compact'} />);
    expect(component).toMatchSnapshot();
  });
  it('should be possible to activate button with Spacebar', () => {
    const component = mount(<Button id="button-test" />);
    component.find('button#button-test').simulate('keydown', { keyCode: 32 });
    expect(component).toMatchSnapshot();
    component.unmount();
  });
  const clickFn = jest.fn();
  it('button click trigger onclick', () => {
    const component = shallow(<Button id="button-test-2" onClick={clickFn} />);
    component.find('button#button-test-2').simulate('click');
    expect(clickFn).toHaveBeenCalled();
  });
  // Check also disabled
});
