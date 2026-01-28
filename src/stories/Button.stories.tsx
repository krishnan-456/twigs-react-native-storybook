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
  args: {
    children: 'Button',
  },
};

export const Variants: Story = {
  render: () => (
    <Flex style={styles.showcase}>
      <Button variant="solid" color="primary">
        Solid
      </Button>
      <Button variant="outline" color="primary">
        Outline
      </Button>
      <Button variant="ghost" color="primary">
        Ghost
      </Button>
    </Flex>
  ),
};

export const Colors: Story = {
  render: () => (
    <Flex style={styles.showcase}>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="negative">Negative</Button>
    </Flex>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex style={styles.showcase}>
      <Button size="sm" color="primary">
        Small
      </Button>
      <Button size="md" color="primary">
        Medium
      </Button>
      <Button size="lg" color="primary">
        Large
      </Button>
    </Flex>
  ),
};

export const States: Story = {
  render: () => (
    <Flex style={styles.showcase}>
      <Button color="primary">Normal</Button>
      <Button color="primary" disabled>
        Disabled
      </Button>
      <Button color="primary" loading>
        Loading
      </Button>
    </Flex>
  ),
};

const styles = StyleSheet.create({
  showcase: {
    gap: 12,
  },
});
