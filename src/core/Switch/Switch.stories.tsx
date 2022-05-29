import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Switch from './Switch';
import Flex from '../Flex';
import Power from '../../icons/Power';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Switch',
  component: Switch,
  parameters: {
    docs: {
      source: {
        state: 'open',
      },
    },
  },
  argTypes: {
    color: {
      options: ['primary', 'success', 'error', 'info', 'warning'],
      control: { type: 'select' },
      description: 'Set Switch color',
      defaultValue: 'primary',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state of Switch',
      defaultValue: false,
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Set the loading status of Switch',
      defaultValue: false,
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
      description: 'Set Switch size',
      defaultValue: 'medium',
    },
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Basic = Template.bind({});
Basic.args = {};

export const Color = () => (
  <Flex sx={{ gap: 10 }}>
    <Switch color="primary" />
    <Switch color="success" />
    <Switch color="error" />
    <Switch color="warning"/>
  </Flex>
);

export const Disabled = () => (
  <Flex sx={{ gap: 10 }}>
    <Switch disabled color="primary" />
    <Switch disabled color="success" />
    <Switch disabled color="error" />
    <Switch disabled color="warning"/>
  </Flex>
);

export const Size = () => (
  <Flex sx={{ gap: 10 }}>
    <Switch size="small" />
    <Switch size="medium" />
    <Switch size="large" />
  </Flex>
);
