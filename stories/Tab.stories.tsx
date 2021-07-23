import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tab, TabProps } from '../src/components/Tab';
import '../src/index.css';

const meta: Meta = {
  title: 'Tab',
  component: Tab,
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

const Template: Story<TabProps> = (args) => <Tab {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  children: 'Tab 1',
  onClick: null,
};
