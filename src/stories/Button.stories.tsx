import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Flex } from 'testing-twigs';

const ButtonMeta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'default', 'negative', 'neutral'],
    },
    variant: {
      control: { type: 'select' },
      options: ['solid', 'ghost', 'outline'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
  },
  args: {
    children: 'Button',
    size: 'md',
    color: 'primary',
    variant: 'solid',
    disabled: false,
    loading: false,
  },
};

export default ButtonMeta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => (
    <Flex align="center" justify="center" style={styles.container}>
      <Button {...args} style={{ maxWidth: 300 }}>
        {args.children}
      </Button>
    </Flex>
  ),
};

export const Variants: Story = {
  render: () => (
    <Flex align="center" justify="center" style={styles.container}>
      <Flex style={styles.showcase}>
        <Button variant="solid" color="primary" style={styles.button}>
          Solid
        </Button>
        <Button variant="outline" color="primary" style={styles.button}>
          Outline
        </Button>
        <Button variant="ghost" color="primary" style={styles.button}>
          Ghost
        </Button>
      </Flex>
    </Flex>
  ),
};

export const Colors: Story = {
  render: () => (
    <Flex align="center" justify="center" style={styles.container}>
      <Flex style={styles.showcase}>
        <Button color="primary" style={styles.button}>
          Primary
        </Button>
        <Button color="secondary" style={styles.button}>
          Secondary
        </Button>
        <Button color="negative" style={styles.button}>
          Negative
        </Button>
      </Flex>
    </Flex>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex align="center" justify="center" style={styles.container}>
      <Flex style={styles.showcase}>
        <Button size="sm" color="primary" style={styles.button}>
          Small
        </Button>
        <Button size="md" color="primary" style={styles.button}>
          Medium
        </Button>
        <Button size="lg" color="primary" style={styles.button}>
          Large
        </Button>
      </Flex>
    </Flex>
  ),
};

export const States: Story = {
  render: () => (
    <Flex align="center" justify="center" style={styles.container}>
      <Flex style={styles.showcase}>
        <Button color="primary" style={styles.button}>
          Normal
        </Button>
        <Button color="primary" disabled style={styles.button}>
          Disabled
        </Button>
        <Button color="primary" loading style={styles.button}>
          Loading
        </Button>
      </Flex>
    </Flex>
  ),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  showcase: {
    gap: 12,
    width: '100%',
    maxWidth: 300,
  },
  button: {
    maxWidth: 300,
  },
});
