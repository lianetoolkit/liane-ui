import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Select, SelectProps } from '../src/components/Select';

const meta: Meta = {
  title: 'Selects',
  component: Select,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

let value = '';
const setValue = () => {};

Default.args = {
  size: 'comfortable',
  options: options,
  hint: 'Hint is optional',
  value: value,
  setValue: setValue,
  isMulti: true,
  disabled: false,
};
