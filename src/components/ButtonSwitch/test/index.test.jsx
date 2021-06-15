import React from 'react';
import { shallow, mount } from 'enzyme';
import { ButtonSwitch } from '../index';
import { expect } from 'chai';
import { Button } from '../../Button/index';

describe('ButtonSwitch', () => {
  it('renders Button components', () => {
    const wrapper = shallow(<ButtonSwitch />);
    expect(wrapper.find('.liu-btn-switch')).to.have.length(1);
  });

  it('renders children when passed an option', () => {
    const wrapper = shallow(
      <ButtonSwitch
        options={[
          {
            label: 'Test',
            value: 0,
          },
        ]}
      />
    );
    expect(wrapper.find('.button-switch')).to.have.lengthOf(1);
  });
  it('renders 3 children when passed 3 options', () => {
    const wrapper = shallow(
      <ButtonSwitch
        options={[
          {
            label: 'Test 1',
            value: 0,
          },
          {
            label: 'Test 2',
            value: 2,
          },
          {
            label: 'Test 3',
            value: 3,
          },
        ]}
      />
    );
    expect(wrapper.find('.button-switch')).to.have.lengthOf(3);
  });
});
