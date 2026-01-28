import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Flex, Text } from 'testing-twigs';

const FlexMeta: Meta<typeof Flex> = {
  title: 'Components/Flex',
  component: Flex,
};

export default FlexMeta;

type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  render: () => (
    <Flex padding={16} css={{ backgroundColor: '#f0f0f0' }}>
      <Text>Flex Container</Text>
    </Flex>
  ),
};

export const Layout: Story = {
  render: () => (
    <Flex style={styles.showcase}>
      <Flex
        direction="row"
        justify="space-between"
        padding={12}
        css={{ backgroundColor: '#e3f2fd', gap: 8 }}
      >
        <Flex padding={8} css={{ backgroundColor: '#2196f3' }}>
          <Text color="#fff">1</Text>
        </Flex>
        <Flex padding={8} css={{ backgroundColor: '#2196f3' }}>
          <Text color="#fff">2</Text>
        </Flex>
        <Flex padding={8} css={{ backgroundColor: '#2196f3' }}>
          <Text color="#fff">3</Text>
        </Flex>
      </Flex>

      <Flex
        direction="column"
        align="center"
        padding={12}
        css={{ backgroundColor: '#f3e5f5', gap: 8 }}
      >
        <Flex padding={8} css={{ backgroundColor: '#9c27b0' }}>
          <Text color="#fff">A</Text>
        </Flex>
        <Flex padding={8} css={{ backgroundColor: '#9c27b0' }}>
          <Text color="#fff">B</Text>
        </Flex>
      </Flex>
    </Flex>
  ),
};

const styles = StyleSheet.create({
  showcase: {
    gap: 16,
  },
});
