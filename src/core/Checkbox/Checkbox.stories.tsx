import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Checkbox from './Checkbox';
import Flex from '../Flex';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      source: {
        state: 'open',
      },
    },
  },
  argTypes: {
    color: {
      options: ['primary', 'success', 'error', 'warning'],
      control: { type: 'select' },
      description: 'Set Checkbox color',
      defaultValue: 'primary',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state of Checkbox',
      defaultValue: false,
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
      description: 'Set Checkbox size',
      defaultValue: 'medium',
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Basic = Template.bind({});
Basic.args = {};

export const Color = () => (
  <Flex sx={{ gap: 10 }}>
    <Checkbox color="primary" />
    <Checkbox color="success" />
    <Checkbox color="error" />
    <Checkbox color="warning"/>
  </Flex>
);

export const Disabled = () => (
  <Flex sx={{ gap: 10 }}>
    <Checkbox disabled color="primary" />
    <Checkbox disabled color="success" />
    <Checkbox disabled color="error" />
    <Checkbox disabled color="warning"/>
  </Flex>
);

export const Size = () => (
  <Flex sx={{ gap: 10 }}>
    <Checkbox size="small" />
    <Checkbox size="medium" />
    <Checkbox size="large" />
  </Flex>
);
