import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button1 from './Button';

export default {
  title: 'Example/Button',
  component: Button1,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button1>;

const Template: ComponentStory<typeof Button1> = (args) => <Button1 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Chris',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Nancy',
};