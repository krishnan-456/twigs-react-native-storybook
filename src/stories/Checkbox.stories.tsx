import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Checkbox, Flex, Text } from 'testing-twigs';

const CheckboxMeta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md'],
    },
    checked: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    children: {
      control: { type: 'text' },
    },
  },
  args: {
    size: 'md',
    checked: false,
    disabled: false,
    children: 'Default Checkbox',
  },
};

export default CheckboxMeta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: (args) => (
    // Use a controlled component that responds to args changes
    <Flex align="center" justify="center" style={styles.container}>
      <Checkbox
        size={args.size}
        checked={args.checked}
        disabled={args.disabled}
        onChange={() => {}}
      >
        <Text>{args.children}</Text>
      </Checkbox>
    </Flex>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Flex align="center" justify="center" style={styles.container}>
        <Checkbox checked={checked} onChange={setChecked}>
          <Text>Interactive Checkbox (Click to toggle)</Text>
        </Checkbox>
      </Flex>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);

    return (
      <Flex align="center" justify="center" style={styles.container}>
        <Flex style={styles.showcase}>
          <Checkbox size="sm" checked={checked1} onChange={setChecked1}>
            <Text>Small</Text>
          </Checkbox>
          <Checkbox size="md" checked={checked2} onChange={setChecked2}>
            <Text>Medium</Text>
          </Checkbox>
        </Flex>
      </Flex>
    );
  },
};

export const States: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <Flex align="center" justify="center" style={styles.container}>
        <Flex style={styles.showcase}>
          <Checkbox checked={checked} onChange={setChecked}>
            <Text>Normal</Text>
          </Checkbox>
          <Checkbox checked onChange={() => {}}>
            <Text>Checked</Text>
          </Checkbox>
          <Checkbox checked={false} onChange={() => {}} disabled>
            <Text>Disabled</Text>
          </Checkbox>
          <Checkbox checked onChange={() => {}} disabled>
            <Text>Checked & Disabled</Text>
          </Checkbox>
        </Flex>
      </Flex>
    );
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  showcase: {
    gap: 16,
  },
});
