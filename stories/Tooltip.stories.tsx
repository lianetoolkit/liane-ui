import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Tooltip, TooltipProps } from '../src/components/Tooltip';
import '../src/index.css';

const meta: Meta = {
  title: 'Tooltips',
  component: Tooltip,
  argTypes: {
    children: {
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

const Template: Story<TooltipProps> = (args) => <Tooltip {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  placement: 'top',
  children: 'Testing a tooltip',
  title: "Hey I'm on the top",
};
