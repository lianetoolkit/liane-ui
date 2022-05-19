import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Table, TableProps } from '../src/components/Table';
import '../src/index.css';

const meta: Meta = {
  title: 'Table',
  component: Table,
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

const Template: Story<TableProps> = (args) => <Table {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  columns: [
    {
      Header: 'First Name',
      accessor: 'first_name',
    },
    {
      Header: 'Last Name',
      accessor: 'last_name',
    },
    {
      Header: 'Age',
      accessor: 'age',
    },
  ],
  data: [],
  shadow: true,
};
