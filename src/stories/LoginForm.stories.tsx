import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {LoginForm as Form}  from '../components/business/LoginForm';

export default {
  title: 'Organisms/LoginForm',
  component: Form,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    borderColor: { control: 'color' },
  },
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const LoginForm = Template.bind({});
LoginForm.args = {
  title: 'Login Form',
  style: {
    textAlign: 'center',
  },
  submit: ()=>{
    console.log('submit');
  },
  reset: ()=>{
    console.log('reset');
  }
};