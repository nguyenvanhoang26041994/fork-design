import React from 'react';

import Button, { ButtonProps } from './Button';
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
      options: ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'],
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
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
      description: 'Set button size',
      defaultValue: 'medium',
    },
    variant: {
      options: ['contained', 'outlined', 'text'],
      control: { type: 'select' },
      description: 'Set button variant',
      defaultValue: 'text',
    },
    htmlType: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'select' },
      description: 'Set button type',
      defaultValue: 'button',
    },
  },
};

const Template = (args: ButtonProps) => <Button {...args}>Click me</Button>;

export const Basic = Template.bind({});
Basic.args = {};

export const Color = () => (
  <Flex style={{ gap: 10 }}>
    <Button color="inherit">inherit</Button>
    <Button color="primary">primary</Button>
    <Button color="secondary">secondary</Button>
    <Button color="success">success</Button>
    <Button color="error">error</Button>
    <Button color="info">info</Button>
    <Button color="warning">warning</Button>
  </Flex>
);

export const Disabled = () => (
  <Flex style={{ gap: 10 }}>
    <Button disabled color="inherit">inherit</Button>
    <Button disabled color="primary">primary</Button>
    <Button disabled color="secondary">secondary</Button>
    <Button disabled color="success">success</Button>
    <Button disabled color="error">error</Button>
    <Button disabled color="info">info</Button>
    <Button disabled color="warning">warning</Button>
  </Flex>
);

export const Loading = () => (
  <Flex style={{ gap: 10 }}>
    <Button loading color="inherit">inherit</Button>
    <Button loading color="primary">primary</Button>
    <Button loading color="secondary">secondary</Button>
    <Button loading color="success">success</Button>
    <Button loading color="error">error</Button>
    <Button loading color="info">info</Button>
    <Button loading color="warning">warning</Button>
  </Flex>
);

export const Size = () => (
  <Flex style={{ gap: 10 }}>
    <Button size="small">small</Button>
    <Button size="medium">medium</Button>
    <Button size="large">large</Button>
  </Flex>
);

export const Variant = () => (
  <Flex style={{ gap: 10 }}>
    <Button variant="outlined">outlined</Button>
    <Button variant="outlined-dashed">outlined-dashed</Button>
    <Button variant="contained">contained</Button>
    <Button variant="text">text</Button>
  </Flex>
);

export const Shape = () => (
  <Flex style={{ gap: 10 }}>
    <Button shape="default">default</Button>
    <Button shape="round">round</Button>
  </Flex>
);
