import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Box, Text, Flex } from 'testing-twigs';

const BoxMeta: Meta<typeof Box> = {
  title: 'Components/Box',
  component: Box,
  argTypes: {
    padding: {
      control: { type: 'number', min: 0, max: 64, step: 4 },
    },
    margin: {
      control: { type: 'number', min: 0, max: 64, step: 4 },
    },
    paddingHorizontal: {
      control: { type: 'number', min: 0, max: 64, step: 4 },
    },
    paddingVertical: {
      control: { type: 'number', min: 0, max: 64, step: 4 },
    },
    marginHorizontal: {
      control: { type: 'number', min: 0, max: 64, step: 4 },
    },
    marginVertical: {
      control: { type: 'number', min: 0, max: 64, step: 4 },
    },
    children: {
      control: { type: 'text' },
    },
  },
  args: {
    padding: 16,
    children: 'Basic Box Container',
  },
};

export default BoxMeta;

type Story = StoryObj<typeof Box>;

export const Default: Story = {
  render: (args) => (
    <Flex align="center" justify="center" style={styles.container}>
      <Box {...args} css={{ backgroundColor: '#e3f2fd' }}>
        <Text>{args.children}</Text>
      </Box>
    </Flex>
  ),
};

export const Spacing: Story = {
  render: () => (
    <Flex align="center" justify="center" style={styles.container}>
      <Flex style={styles.showcase}>
        <Box padding={12} css={{ backgroundColor: '#f3e5f5' }}>
          <Text>With Padding</Text>
        </Box>

        <Box css={{ backgroundColor: '#fce4ec' }}>
          <Box margin={12} padding={12} css={{ backgroundColor: '#fff' }}>
            <Text>With Margin</Text>
          </Box>
        </Box>
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
});
