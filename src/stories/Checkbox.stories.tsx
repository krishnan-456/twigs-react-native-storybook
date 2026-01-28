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
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default CheckboxMeta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox checked={checked} onChange={setChecked}>
        <Text>Default Checkbox</Text>
      </Checkbox>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);

    return (
      <Flex style={styles.showcase}>
        <Checkbox size="sm" checked={checked1} onChange={setChecked1}>
          <Text>Small</Text>
        </Checkbox>
        <Checkbox size="md" checked={checked2} onChange={setChecked2}>
          <Text>Medium</Text>
        </Checkbox>
      </Flex>
    );
  },
};

export const States: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
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
    );
  },
};

const styles = StyleSheet.create({
  showcase: {
    gap: 16,
  },
});
