import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Switch, Flex, Text } from 'testing-twigs';

const SwitchMeta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default SwitchMeta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: () => {
    const [enabled, setEnabled] = useState(false);
    return (
      <Flex direction="row" align="center" style={styles.row}>
        <Switch value={enabled} onValueChange={setEnabled} />
        <Text marginLeft={12}>Toggle Switch</Text>
      </Flex>
    );
  },
};

export const States: Story = {
  render: () => (
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
  ),
};

const styles = StyleSheet.create({
  showcase: {
    gap: 16,
  },
  row: {
    gap: 8,
  },
});
