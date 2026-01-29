import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Flex, Text } from 'testing-twigs';

const FlexMeta: Meta<typeof Flex> = {
  title: 'Components/Flex',
  component: Flex,
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
    },
    justify: {
      control: { type: 'select' },
      options: [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
      ],
    },
    align: {
      control: { type: 'select' },
      options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
    },
    wrap: {
      control: { type: 'select' },
      options: ['nowrap', 'wrap', 'wrap-reverse'],
    },
    padding: {
      control: { type: 'number', min: 0, max: 64, step: 4 },
    },
    margin: {
      control: { type: 'number', min: 0, max: 64, step: 4 },
    },
    children: {
      control: { type: 'text' },
    },
  },
  args: {
    direction: 'column',
    justify: 'flex-start',
    align: 'stretch',
    wrap: 'nowrap',
    padding: 16,
    children: 'Flex Container',
  },
};

export default FlexMeta;

type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  render: (args) => (
    <Flex align="center" justify="center" style={styles.container}>
      <Flex {...args} css={{ backgroundColor: '#f0f0f0' }}>
        <Text>{args.children}</Text>
      </Flex>
    </Flex>
  ),
};

export const Layout: Story = {
  render: () => (
    <Flex align="center" justify="center" style={styles.container}>
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
