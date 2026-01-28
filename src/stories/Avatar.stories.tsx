import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Flex, Text } from 'testing-twigs';

const AvatarMeta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    rounded: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    name: {
      control: { type: 'text' },
    },
  },
  args: {
    name: 'John Doe',
    rounded: 'md',
  },
};

export default AvatarMeta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    name: 'John Doe',
  },
};

export const Sizes: Story = {
  render: () => (
    <Flex direction="row" align="center" style={styles.showcase}>
      <Flex align="center" style={styles.avatarItem}>
        <Avatar rounded="xs" name="John Doe" width={24} height={24} />
        <Text fontSize={12} marginTop={4}>
          XS
        </Text>
      </Flex>
      <Flex align="center" style={styles.avatarItem}>
        <Avatar rounded="sm" name="John Doe" width={32} height={32} />
        <Text fontSize={12} marginTop={4}>
          SM
        </Text>
      </Flex>
      <Flex align="center" style={styles.avatarItem}>
        <Avatar rounded="md" name="John Doe" width={40} height={40} />
        <Text fontSize={12} marginTop={4}>
          MD
        </Text>
      </Flex>
      <Flex align="center" style={styles.avatarItem}>
        <Avatar rounded="lg" name="John Doe" width={48} height={48} />
        <Text fontSize={12} marginTop={4}>
          LG
        </Text>
      </Flex>
      <Flex align="center" style={styles.avatarItem}>
        <Avatar rounded="xl" name="John Doe" width={64} height={64} />
        <Text fontSize={12} marginTop={4}>
          XL
        </Text>
      </Flex>
      <Flex align="center" style={styles.avatarItem}>
        <Avatar rounded="2xl" name="John Doe" width={80} height={80} />
        <Text fontSize={12} marginTop={4}>
          2XL
        </Text>
      </Flex>
    </Flex>
  ),
};

export const WithInitials: Story = {
  render: () => (
    <Flex direction="row" style={styles.showcase}>
      <Avatar name="John Doe" />
      <Avatar name="Jane Smith" />
      <Avatar name="Bob Wilson" />
      <Avatar name="Alice Brown" />
    </Flex>
  ),
};

const styles = StyleSheet.create({
  showcase: {
    gap: 16,
    flexWrap: 'wrap',
  },
  avatarItem: {
    gap: 4,
  },
});
