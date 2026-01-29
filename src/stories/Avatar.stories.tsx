import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Flex, Text } from 'testing-twigs';

const AvatarMeta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
    },
    rounded: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'],
    },
    name: {
      control: { type: 'text' },
    },
    imageSrc: {
      control: { type: 'text' },
    },
  },
  args: {
    name: 'John Doe',
    size: 'md',
    rounded: 'full',
  },
};

export default AvatarMeta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: (args) => (
    <Flex align="center" justify="center" style={styles.container}>
      <Avatar {...args} />
    </Flex>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex direction="row" align="center" style={styles.showcase}>
      <Flex align="center" style={styles.avatarItem}>
        <Avatar size="xs" name="John Doe" />
        <Text fontSize={12} marginTop={4}>
          XS (20px)
        </Text>
      </Flex>
      <Flex align="center" style={styles.avatarItem}>
        <Avatar size="sm" name="John Doe" />
        <Text fontSize={12} marginTop={4}>
          SM (24px)
        </Text>
      </Flex>
      <Flex align="center" style={styles.avatarItem}>
        <Avatar size="md" name="John Doe" />
        <Text fontSize={12} marginTop={4}>
          MD (32px)
        </Text>
      </Flex>
      <Flex align="center" style={styles.avatarItem}>
        <Avatar size="lg" name="John Doe" />
        <Text fontSize={12} marginTop={4}>
          LG (40px)
        </Text>
      </Flex>
      <Flex align="center" style={styles.avatarItem}>
        <Avatar size="xl" name="John Doe" />
        <Text fontSize={12} marginTop={4}>
          XL (48px)
        </Text>
      </Flex>
      <Flex align="center" style={styles.avatarItem}>
        <Avatar size="2xl" name="John Doe" />
        <Text fontSize={12} marginTop={4}>
          2XL (56px)
        </Text>
      </Flex>
      <Flex align="center" style={styles.avatarItem}>
        <Avatar size="3xl" name="John Doe" />
        <Text fontSize={12} marginTop={4}>
          3XL (64px)
        </Text>
      </Flex>
      <Flex align="center" style={styles.avatarItem}>
        <Avatar size="4xl" name="John Doe" />
        <Text fontSize={12} marginTop={4}>
          4XL (72px)
        </Text>
      </Flex>
      <Flex align="center" style={styles.avatarItem}>
        <Avatar size="5xl" name="John Doe" />
        <Text fontSize={12} marginTop={4}>
          5XL (120px)
        </Text>
      </Flex>
    </Flex>
  ),
};

export const RoundedVariants: Story = {
  render: () => (
    <Flex direction="column" style={styles.showcase}>
      <Flex direction="row" align="center" style={styles.showcase}>
        <Flex align="center" style={styles.avatarItem}>
          <Avatar size="lg" name="John Doe" rounded="xs" />
          <Text fontSize={12} marginTop={4}>
            XS (4px)
          </Text>
        </Flex>
        <Flex align="center" style={styles.avatarItem}>
          <Avatar size="lg" name="John Doe" rounded="sm" />
          <Text fontSize={12} marginTop={4}>
            SM (8px)
          </Text>
        </Flex>
        <Flex align="center" style={styles.avatarItem}>
          <Avatar size="lg" name="John Doe" rounded="md" />
          <Text fontSize={12} marginTop={4}>
            MD (12px)
          </Text>
        </Flex>
        <Flex align="center" style={styles.avatarItem}>
          <Avatar size="lg" name="John Doe" rounded="lg" />
          <Text fontSize={12} marginTop={4}>
            LG (16px)
          </Text>
        </Flex>
      </Flex>
      <Flex direction="row" align="center" style={styles.showcase}>
        <Flex align="center" style={styles.avatarItem}>
          <Avatar size="lg" name="John Doe" rounded="xl" />
          <Text fontSize={12} marginTop={4}>
            XL (20px)
          </Text>
        </Flex>
        <Flex align="center" style={styles.avatarItem}>
          <Avatar size="lg" name="John Doe" rounded="2xl" />
          <Text fontSize={12} marginTop={4}>
            2XL (24px)
          </Text>
        </Flex>
        <Flex align="center" style={styles.avatarItem}>
          <Avatar size="lg" name="John Doe" rounded="3xl" />
          <Text fontSize={12} marginTop={4}>
            3XL (32px)
          </Text>
        </Flex>
        <Flex align="center" style={styles.avatarItem}>
          <Avatar size="lg" name="John Doe" rounded="full" />
          <Text fontSize={12} marginTop={4}>
            Full
          </Text>
        </Flex>
      </Flex>
    </Flex>
  ),
};

export const WithInitials: Story = {
  render: () => (
    <Flex direction="row" style={styles.showcase}>
      <Avatar name="John Doe" size="md" />
      <Avatar name="Jane Smith" size="md" />
      <Avatar name="Bob Wilson" size="md" />
      <Avatar name="Alice Brown" size="md" />
    </Flex>
  ),
};

export const CustomColors: Story = {
  render: () => (
    <Flex direction="row" style={styles.showcase}>
      <Avatar name="John Doe" size="lg" backgroundColor="#E0F2FE" textColor="#0284C7" />
      <Avatar name="Jane Smith" size="lg" backgroundColor="#FEF3C7" textColor="#D97706" />
      <Avatar name="Bob Wilson" size="lg" backgroundColor="#DCFCE7" textColor="#16A34A" />
      <Avatar name="Alice Brown" size="lg" backgroundColor="#FCE7F3" textColor="#DB2777" />
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
    flexWrap: 'wrap',
  },
  avatarItem: {
    gap: 4,
  },
});
