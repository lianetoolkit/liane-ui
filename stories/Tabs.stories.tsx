import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tab } from '../src/components/Tab';
import { Tabs, TabsProps } from '../src/components/Tabs';
import '../src/index.css';

const meta: Meta = {
  title: 'Tabs',
  component: Tabs,
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

const Template: Story<TabsProps> = (args) => <Tabs {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  value: 1,
  children: [
    <Tab index={0}>Tab 1</Tab>,
    <Tab index={1}>Tab 2</Tab>,
    <Tab index={2}>Tab 3</Tab>,
    <Tab index={3}>Tab 4</Tab>,
  ],
  onChange: null,
};
