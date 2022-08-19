import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Radio from './Radio';
import Flex from '../Flex';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Radio',
  component: Radio,
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
      description: 'Set Radio color',
      defaultValue: 'primary',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state of Radio',
      defaultValue: false,
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
      description: 'Set Radio size',
      defaultValue: 'medium',
    },
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Basic = Template.bind({});
Basic.args = {};

export const Color = () => (
  <Flex sx={{ gap: 10 }}>
    <Radio color="primary" />
    <Radio color="success" />
    <Radio color="error" />
    <Radio color="warning"/>
  </Flex>
);

export const Disabled = () => (
  <Flex sx={{ gap: 10 }}>
    <Radio disabled color="primary" />
    <Radio disabled color="success" />
    <Radio disabled color="error" />
    <Radio disabled color="warning"/>
  </Flex>
);

export const Size = () => (
  <Flex sx={{ gap: 10 }}>
    <Radio size="small" />
    <Radio size="medium" />
    <Radio size="large" />
  </Flex>
);
