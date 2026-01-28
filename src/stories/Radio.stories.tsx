import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Radio, Flex, Text } from 'testing-twigs';

const RadioMeta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
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

export default RadioMeta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState(false);
    return (
      <Radio selected={selected} onSelect={setSelected}>
        <Text>Default Radio</Text>
      </Radio>
    );
  },
};

export const Group: Story = {
  render: () => {
    const [selected, setSelected] = useState('option1');

    return (
      <Flex style={styles.showcase}>
        <Radio selected={selected === 'option1'} onSelect={() => setSelected('option1')}>
          <Text>Option 1</Text>
        </Radio>
        <Radio selected={selected === 'option2'} onSelect={() => setSelected('option2')}>
          <Text>Option 2</Text>
        </Radio>
        <Radio selected={selected === 'option3'} onSelect={() => setSelected('option3')}>
          <Text>Option 3</Text>
        </Radio>
      </Flex>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [selected, setSelected] = useState('md');

    return (
      <Flex style={styles.showcase}>
        <Radio size="sm" selected={selected === 'sm'} onSelect={() => setSelected('sm')}>
          <Text>Small</Text>
        </Radio>
        <Radio size="md" selected={selected === 'md'} onSelect={() => setSelected('md')}>
          <Text>Medium</Text>
        </Radio>
      </Flex>
    );
  },
};

export const States: Story = {
  render: () => (
    <Flex style={styles.showcase}>
      <Radio selected={false} onSelect={() => {}}>
        <Text>Normal</Text>
      </Radio>
      <Radio selected onSelect={() => {}}>
        <Text>Selected</Text>
      </Radio>
      <Radio selected={false} onSelect={() => {}} disabled>
        <Text>Disabled</Text>
      </Radio>
      <Radio selected onSelect={() => {}} disabled>
        <Text>Selected & Disabled</Text>
      </Radio>
    </Flex>
  ),
};

const styles = StyleSheet.create({
  showcase: {
    gap: 16,
  },
});
