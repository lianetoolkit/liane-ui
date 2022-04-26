import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextInput, TextInputProps } from '../src/components/TextInput';
import '../src/index.css';

const meta: Meta = {
    title: 'TextInput',
    component: TextInput,
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

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
export const Password = Template.bind({});
export const withIcon = Template.bind({});
export const innerLabel = Template.bind({});

Default.args = {
    label: 'Full Name',
    help: 'As printed in your ID',
    placeholder: 'John Doe',
    type: "text"
};
withIcon.args = {
    label: 'Birthdate',
    placeholder: 'AAAA/MM/DD',
    type: "text",
    icon: 'calendar_month'
};
Password.args = {
    label: 'Password',
    help: 'Enter a strong password',
    placeholder: 'Choose wisely',
    type: "password"

};
innerLabel.args = {
    label: 'Website',
    help: 'Site url',
    placeholder: 'www.site.com',
    type: "text",
    labelLeading: 'http://',
    labelTrailing: '.ar'
}
// Clickable.args = {
//     children: 'Delete',
//     iconName: 'delete',
//     onClose: null,
//     onClick: () => {
//         alert('hey');
//     },
// };
// Close.args = {
//     children: 'Close me',
//     onClick: null,
//     onClose: () => {
//         alert('bye ');
//     },
// };