import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Switch, Flex, Text } from 'testing-twigs';

const SwitchMeta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    value: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  args: {
    value: false,
    disabled: false,
  },
};

export default SwitchMeta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: (args) => (
    // Use a controlled component that responds to args changes
    <Flex align="center" justify="center" style={styles.container}>
      <Flex direction="row" align="center" style={styles.row}>
        <Switch value={args.value} disabled={args.disabled} onValueChange={() => {}} />
        <Text marginLeft={12}>Toggle Switch</Text>
      </Flex>
    </Flex>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [enabled, setEnabled] = useState(false);
    return (
      <Flex align="center" justify="center" style={styles.container}>
        <Flex direction="row" align="center" style={styles.row}>
          <Switch value={enabled} onValueChange={setEnabled} />
          <Text marginLeft={12}>Interactive Switch (Click to toggle)</Text>
        </Flex>
      </Flex>
    );
  },
};

export const States: Story = {
  render: () => (
    <Flex align="center" justify="center" style={styles.container}>
      <Flex style={styles.showcase}>
        <Flex direction="row" align="center" style={styles.row}>
          <Switch value={false} onValueChange={() => {}} />
          <Text marginLeft={12}>Off</Text>
        </Flex>
        <Flex direction="row" align="center" style={styles.row}>
          <Switch value onValueChange={() => {}} />
          <Text marginLeft={12}>On</Text>
        </Flex>
        <Flex direction="row" align="center" style={styles.row}>
          <Switch value={false} onValueChange={() => {}} disabled />
          <Text marginLeft={12}>Disabled Off</Text>
        </Flex>
        <Flex direction="row" align="center" style={styles.row}>
          <Switch value onValueChange={() => {}} disabled />
          <Text marginLeft={12}>Disabled On</Text>
        </Flex>
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
    gap: 16,
  },
  row: {
    gap: 8,
  },
});
