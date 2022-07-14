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
export const Sortable = Template.bind({});
export const Expandable = Template.bind({});

const data = [
  {
    first_name: 'Kito ',
    last_name: 'Junqueira',
    age: 71,
  },
  {
    first_name: 'Stepan',
    last_name: 'Nercessian',
    age: 68,
  },
  {
    first_name: 'Renan ',
    last_name: 'Calheiros',
    age: 66,
  },
  {
    first_name: 'Edison',
    last_name: 'Lobão',
    age: 85,
  },
];
const columns = [
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
];
Default.args = {
  columns: columns,
  data: data,
  shadow: true,
};

Sortable.args = {
  columns: columns,
  data: data,
  shadow: false,
  sortable: true,
};
const expand = [...data];

// expand.map((item) => {
//   item['subRows'] = [
//     {
//       extra: 'Adding extra content',
//     },
//   ];
//   return item;
// });
console.log(data, expand);
Expandable.args = {
  columns: columns,
  data: expand,
  shadow: false,
  sortable: true,
};
