import React from 'react';

import Switch from './Switch'

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Switch',
  component: Switch,
  argTypes: {
    intent: {
      control: { type: 'text' },
      description: 'Set intent color',
      defaultValue: 'default',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Set the loading status of Switch',
      defaultValue: false,
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state of Switch',
      defaultValue: false,
    },
    size: {
      control: { type: 'text' },
      description: 'Set the size of Switch'
    }
  },
};

const Template = (args) => <Switch {...args} />;

export const Basic = Template.bind({});
Basic.args = {};

export const Intent = () => (
  <>
    <Switch intent="var(--primary)" />
  </>
);
