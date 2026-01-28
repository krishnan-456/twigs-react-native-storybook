import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput, Flex, Text } from 'testing-twigs';

const TextInputMeta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    errorBorder: {
      control: { type: 'boolean' },
    },
  },
  args: {
    placeholder: 'Enter text...',
    size: 'md',
    variant: 'default',
  },
};

export default TextInputMeta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return <TextInput placeholder="Enter text..." value={value} onChangeText={setValue} />;
  },
};

export const Variants: Story = {
  render: () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

    return (
      <Flex style={styles.showcase}>
        <Flex>
          <Text marginBottom={8} fontFamily="DMSans_500Medium">
            Default
          </Text>
          <TextInput
            variant="default"
            placeholder="Default variant"
            value={value1}
            onChangeText={setValue1}
          />
        </Flex>
        <Flex>
          <Text marginBottom={8} fontFamily="DMSans_500Medium">
            Filled
          </Text>
          <TextInput
            variant="filled"
            placeholder="Filled variant"
            value={value2}
            onChangeText={setValue2}
          />
        </Flex>
      </Flex>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');

    return (
      <Flex style={styles.showcase}>
        <Flex>
          <Text marginBottom={8} fontFamily="DMSans_500Medium">
            Small
          </Text>
          <TextInput size="sm" placeholder="Small input" value={value1} onChangeText={setValue1} />
        </Flex>
        <Flex>
          <Text marginBottom={8} fontFamily="DMSans_500Medium">
            Medium
          </Text>
          <TextInput size="md" placeholder="Medium input" value={value2} onChangeText={setValue2} />
        </Flex>
        <Flex>
          <Text marginBottom={8} fontFamily="DMSans_500Medium">
            Large
          </Text>
          <TextInput size="lg" placeholder="Large input" value={value3} onChangeText={setValue3} />
        </Flex>
      </Flex>
    );
  },
};

export const States: Story = {
  render: () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('Disabled input');
    const [value3, setValue3] = useState('');

    return (
      <Flex style={styles.showcase}>
        <Flex>
          <Text marginBottom={8} fontFamily="DMSans_500Medium">
            Normal
          </Text>
          <TextInput placeholder="Normal input" value={value1} onChangeText={setValue1} />
        </Flex>
        <Flex>
          <Text marginBottom={8} fontFamily="DMSans_500Medium">
            Disabled
          </Text>
          <TextInput
            placeholder="Disabled input"
            value={value2}
            onChangeText={setValue2}
            disabled
          />
        </Flex>
        <Flex>
          <Text marginBottom={8} fontFamily="DMSans_500Medium">
            Error
          </Text>
          <TextInput
            placeholder="Error state"
            value={value3}
            onChangeText={setValue3}
            errorBorder
          />
        </Flex>
      </Flex>
    );
  },
};

export const Password: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return (
      <Flex>
        <Text marginBottom={8} fontFamily="DMSans_500Medium">
          Password Input
        </Text>
        <TextInput
          placeholder="Enter password"
          value={value}
          onChangeText={setValue}
          secureTextEntry={!showPassword}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
      </Flex>
    );
  },
};

const styles = StyleSheet.create({
  showcase: {
    gap: 16,
  },
});
