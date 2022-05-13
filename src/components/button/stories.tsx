import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './index';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
};

export const PrimaryOutlined = Template.bind({});
PrimaryOutlined.args = {
  label: 'Primary',
  variant: 'outlined',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  color: 'secondary',
};

export const SecondaryOutlined = Template.bind({});
SecondaryOutlined.args = {
  label: 'Secondary',
  color: 'secondary',
  variant: 'outlined',
};
