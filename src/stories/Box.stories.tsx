import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Box, Text, Flex } from 'testing-twigs';

const BoxMeta: Meta<typeof Box> = {
  title: 'Components/Box',
  component: Box,
};

export default BoxMeta;

type Story = StoryObj<typeof Box>;

export const Default: Story = {
  render: () => (
    <Box padding={16} css={{ backgroundColor: '#e3f2fd' }}>
      <Text>Basic Box Container</Text>
    </Box>
  ),
};

export const Spacing: Story = {
  render: () => (
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
  ),
};

const styles = StyleSheet.create({
  showcase: {
    gap: 16,
  },
});
