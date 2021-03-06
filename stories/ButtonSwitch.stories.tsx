import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  ButtonSwitch,
  ButtonSwitchProps,
} from '../src/components/ButtonSwitch';
import '../src/index.css';

const meta: Meta = {
  title: 'Buttons Switch',
  component: ButtonSwitch,
  argTypes: {
    children: {
      control: {},
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ButtonSwitchProps> = (args) => <ButtonSwitch {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  size: 'compact',
  defaultValue: 3,
  options: [
    {
      value: 0,
      label: 'Option 1',
    },
    {
      value: 1,
      label: 'Option 2',
      disabled: true,
    },
    {
      value: 2,
      label: 'Option 3',
    },
    {
      value: 3,
      label: 'Option 4',
    },
  ],
};
