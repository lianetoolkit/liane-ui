import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tag, TagProps } from '../src/components/Tag';
import '../src/index.css';

const meta: Meta = {
  title: 'Tag',
  component: Tag,
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

const Template: Story<TagProps> = (args) => <Tag {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  color: 'main',
  children: 'Testing a Tag',
  size: 'md',
};
