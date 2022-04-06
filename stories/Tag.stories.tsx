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
export const Clickable = Template.bind({});
export const Close = Template.bind({});
Default.args = {
  children: 'Delete',
  iconName: 'star',
  onClick: null,
};
Clickable.args = {
  children: 'Delete',
  iconName: 'delete',
  onClose: null,
  onClick: () => {
    alert('hey');
  },
};
Close.args = {
  children: 'Close me',
  onClick: null,
  onClose: () => {
    alert('bye ');
  },
};
