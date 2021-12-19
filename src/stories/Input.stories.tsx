import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Input}  from '../components/global/Input';

export default {
  title: 'Molecules/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    borderColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  disabled: true,
  type: 'text',
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  disabled: false,
  type: 'password',
};

export const TextInput = Template.bind({});
TextInput.args = {
  disabled: false,
  type: 'text',
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  disabled: false,
  type: 'number',
};

export const TextInputWithLabel = Template.bind({});
TextInputWithLabel.args = {
  disabled: false,
  label: 'user name:',
  type: 'text',
};

export const TextInputWithInlineLabel = Template.bind({});
TextInputWithInlineLabel.args = {
  disabled: false,
  label: 'user name:',
  type: 'text',
  inLine: true
};