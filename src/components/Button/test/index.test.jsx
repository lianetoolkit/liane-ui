import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import { Button } from '../index';

describe('Button', () => {
  it('renders Button components', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('button')).to.have.length(1);
  });
  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mount(<Button onClick={onButtonClick} />);
    wrapper.find('button').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });
  it('allows us to set props', () => {
    const wrapper = mount(<Button type="primary" />);
    expect(wrapper.props().type).to.equal('primary');
    wrapper.setProps({ size: 'compact' });
    expect(wrapper.props().size).to.equal('compact');
  });
  it('renders an `button-test-3`', () => {
    const wrapper = shallow(<Button id="button-test-3" />);
    expect(wrapper.find('button#button-test-3')).to.have.length(1);
  });
  it('renders an `button-test-4 disabled`', () => {
    const wrapper = shallow(<Button id="button-test-4" disabled />);
    expect(wrapper.find('button.bg-gray-200')).to.have.lengthOf(1);
  });
  // it('renders children when passed in', () => {
  //   const wrapper = shallow(
  //     <Button>
  //       <span className="special">Liane</span>
  //     </Button>
  //   );
  //   expect(wrapper.contains(<span />)).to.equal(true);
  // });
});
