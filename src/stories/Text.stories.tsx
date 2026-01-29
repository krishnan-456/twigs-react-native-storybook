import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Flex } from 'testing-twigs';

const TextMeta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    fontSize: {
      control: { type: 'number', min: 10, max: 48, step: 1 },
    },
    fontFamily: {
      control: { type: 'select' },
      options: [
        'DMSans_400Regular',
        'DMSans_400Regular_Italic',
        'DMSans_500Medium',
        'DMSans_500Medium_Italic',
        'DMSans_700Bold',
        'DMSans_700Bold_Italic',
      ],
    },
    textAlign: {
      control: { type: 'select' },
      options: ['left', 'center', 'right', 'justify'],
    },
    color: {
      control: { type: 'color' },
    },
  },
  args: {
    children: 'Sample Text',
    fontSize: 14,
    fontFamily: 'DMSans_400Regular',
    textAlign: 'left',
  },
};

export default TextMeta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  render: (args) => (
    <Flex align="center" justify="center" style={styles.container}>
      <Text {...args}>{args.children}</Text>
    </Flex>
  ),
};

export const Typography: Story = {
  render: () => (
    <Flex align="center" justify="center" style={styles.container}>
      <Flex style={styles.showcase}>
        <Text fontSize={32} fontFamily="DMSans_700Bold">
          Heading 1
        </Text>
        <Text fontSize={24} fontFamily="DMSans_700Bold">
          Heading 2
        </Text>
        <Text fontSize={18} fontFamily="DMSans_500Medium">
          Heading 3
        </Text>
        <Text fontSize={16} fontFamily="DMSans_400Regular">
          Body Text
        </Text>
        <Text fontSize={12} fontFamily="DMSans_400Regular">
          Caption
        </Text>
      </Flex>
    </Flex>
  ),
};

export const FontWeights: Story = {
  render: () => (
    <Flex align="center" justify="center" style={styles.container}>
      <Flex style={styles.showcase}>
        <Text fontFamily="DMSans_400Regular">Regular (400)</Text>
        <Text fontFamily="DMSans_400Regular_Italic">Regular Italic (400)</Text>
        <Text fontFamily="DMSans_500Medium">Medium (500)</Text>
        <Text fontFamily="DMSans_500Medium_Italic">Medium Italic (500)</Text>
        <Text fontFamily="DMSans_700Bold">Bold (700)</Text>
        <Text fontFamily="DMSans_700Bold_Italic">Bold Italic (700)</Text>
      </Flex>
    </Flex>
  ),
};

export const Colors: Story = {
  render: () => (
    <Flex align="center" justify="center" style={styles.container}>
      <Flex style={styles.showcase}>
        <Text color="#000000">Black Text</Text>
        <Text color="#666666">Gray Text</Text>
        <Text color="#0066CC">Blue Text</Text>
        <Text color="#CC0000">Red Text</Text>
      </Flex>
    </Flex>
  ),
};

export const Spacing: Story = {
  render: () => (
    <Flex align="center" justify="center" style={styles.container}>
      <Flex style={styles.showcase}>
        <Text marginBottom={8} fontSize={16} fontFamily="DMSans_500Medium">
          With Margin
        </Text>
        <Text paddingHorizontal={16} paddingVertical={8} css={{ backgroundColor: '#f0f0f0' }}>
          With Padding
        </Text>
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
  },
});
