import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IconButton, IconButtonProps } from '../src/components/IconButton';
import '../src/index.css';

const meta: Meta = {
  title: 'IconButton',
  component: IconButton,
  argTypes: {
    iconName: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  color: 'main',
  iconName: 'star',
  outlined: true,
};
