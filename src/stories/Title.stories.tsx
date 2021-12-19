import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Title}  from '../components/global/Title';

export default {
  title: 'Molecules/Title',
  component: Title,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    borderColor: { control: 'color' },
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const H1Title = Template.bind({});
H1Title.args = {
  text: 'this is H1',
  level: 1,
};

export const H4Title = Template.bind({});
H4Title.args = {
  text: 'this is H4',
  level: 4,
};

export const H6Title = Template.bind({});
H6Title.args = {
  text: 'this is H6',
  level: 6,
};