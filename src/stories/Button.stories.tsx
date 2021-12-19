import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Button}  from '../components/global/Button';

export default {
  title: 'Molecules/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    borderColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  type: 'primary',
  label: 'Button',
};

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  label: 'Button',
};

export const DisabledPrimaryBottom = Template.bind({});
DisabledPrimaryBottom.args = {
  type: 'primary',
  label: 'Button',
  disabled: true
};

export const DisabledDefaultBottom = Template.bind({});
DisabledDefaultBottom.args = {
  disabled: true,
  label: 'Button',
};

export const SmallPrimaryBottom = Template.bind({});
SmallPrimaryBottom.args = {
  type: 'primary',
  label: 'Button',
  size:'sm'
};

export const LgPrimaryBottom = Template.bind({});
LgPrimaryBottom.args = {
  type: 'primary',
  label: 'Button',
  size:'lg'
};