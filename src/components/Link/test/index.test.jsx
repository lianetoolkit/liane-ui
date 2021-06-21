import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import { Link } from '../index';

describe('Link', () => {
  it('renders Link components', () => {
    const wrapper = shallow(<Link />);
    expect(wrapper.find('a')).to.have.length(1);
  });
  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mount(<Link onClick={onButtonClick} />);
    wrapper.find('a').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });
  it('allows us to set props', () => {
    const wrapper = mount(<Link size="lg" />);
    expect(wrapper.props().size).to.equal('lg');
  });
  it('renders an `anchor-link-test`', () => {
    const wrapper = shallow(<Link id="anchor-link-test" />);
    expect(wrapper.find('a#anchor-link-test')).to.have.length(1);
  });
});
