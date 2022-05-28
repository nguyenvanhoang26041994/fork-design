import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';
import Flex from '../Flex';
import Power from '../../icons/Power';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
  parameters: {
    docs: {
      source: {
        state: 'open',
      },
    },
  },
  argTypes: {
    color: {
      options: ['default', 'primary', 'secondary', 'success', 'error', 'warning'],
      control: { type: 'select' },
      description: 'Set button color',
      defaultValue: 'primary',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state of button',
      defaultValue: false,
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Set the loading status of button',
      defaultValue: false,
    },
    rounded: {
      control: { type: 'boolean' },
      description: 'Set shape button to rounded',
      defaultValue: false,
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
      description: 'Set button size',
      defaultValue: 'medium',
    },
    variant: {
      options: ['contained', 'outlined', 'outlined-dashed', 'text'],
      control: { type: 'select' },
      description: 'Set button variant',
      defaultValue: 'contained',
    },
    htmlType: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'select' },
      description: 'Set button type',
      defaultValue: 'button',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Click me</Button>;

export const Basic = Template.bind({});
Basic.args = {};

export const Color = () => (
  <Flex sx={{ gap: 10 }}>
    <Button color="primary">primary</Button>
    <Button color="secondary">secondary</Button>
    <Button color="success">success</Button>
    <Button color="error">error</Button>
    <Button color="warning">warning</Button>
  </Flex>
);

export const Disabled = () => (
  <Flex sx={{ gap: 10 }}>
    <Button disabled color="primary">primary</Button>
    <Button disabled color="secondary">secondary</Button>
    <Button disabled color="success">success</Button>
    <Button disabled color="error">error</Button>
    <Button disabled color="warning">warning</Button>
  </Flex>
);

export const Loading = () => (
  <Flex sx={{ gap: 10 }}>
    <Button loading color="primary">primary</Button>
    <Button loading color="secondary">secondary</Button>
    <Button loading color="success">success</Button>
    <Button loading color="error">error</Button>
    <Button loading color="warning">warning</Button>
  </Flex>
);

export const Size = () => (
  <Flex sx={{ gap: 10 }}>
    <Button size="small">small</Button>
    <Button size="medium">medium</Button>
    <Button size="large">large</Button>
  </Flex>
);

export const Variant = () => (
  <Flex sx={{ gap: 10 }}>
    <Button variant="outlined">outlined</Button>
    <Button variant="outlined-dashed">outlined-dashed</Button>
    <Button variant="contained">contained</Button>
    <Button variant="text">text</Button>
  </Flex>
);

export const Rounded = () => (
  <Flex sx={{ gap: 10 }}>
    <Button rounded variant="outlined">outlined</Button>
    <Button rounded variant="outlined-dashed">outlined-dashed</Button>
    <Button rounded variant="contained">contained</Button>
    <Button rounded variant="text">text</Button>
  </Flex>
);
