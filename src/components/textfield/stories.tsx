import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextField } from './index';
import {Visibility} from "@mui/icons-material";

export default {
    title: 'Components/TextField',
    component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const TextFieldDefault = Template.bind({});
TextFieldDefault.args = {
    label: 'Label'
}

export const TextFieldWithHelperText = Template.bind({});
TextFieldWithHelperText.args = {
    label: 'Label',
    helperText: 'Helper message'
}

export const TextFieldWithIcon = Template.bind({});
TextFieldWithIcon.args = {
    label: 'Password',
    icon: <Visibility />
}
