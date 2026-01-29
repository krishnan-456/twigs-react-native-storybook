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
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
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
    placeholder: {
      control: { type: 'text' },
    },
  },
  args: {
    placeholder: 'Enter text...',
    size: 'md',
    variant: 'default',
    disabled: false,
    errorBorder: false,
  },
};

export default TextInputMeta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <Flex align="center" justify="center" style={styles.container}>
        <Flex style={styles.inputWrapper}>
          <TextInput {...args} value={value} onChangeText={setValue} />
        </Flex>
      </Flex>
    );
  },
};

export const Variants: Story = {
  render: () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

    return (
      <Flex align="center" justify="center" style={styles.container}>
        <Flex style={styles.showcase}>
          <Flex style={styles.inputWrapper}>
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
          <Flex style={styles.inputWrapper}>
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
      <Flex align="center" justify="center" style={styles.container}>
        <Flex style={styles.showcase}>
          <Flex style={styles.inputWrapper}>
            <Text marginBottom={8} fontFamily="DMSans_500Medium">
              Small
            </Text>
            <TextInput
              size="sm"
              placeholder="Small input"
              value={value1}
              onChangeText={setValue1}
            />
          </Flex>
          <Flex style={styles.inputWrapper}>
            <Text marginBottom={8} fontFamily="DMSans_500Medium">
              Medium
            </Text>
            <TextInput
              size="md"
              placeholder="Medium input"
              value={value2}
              onChangeText={setValue2}
            />
          </Flex>
          <Flex style={styles.inputWrapper}>
            <Text marginBottom={8} fontFamily="DMSans_500Medium">
              Large
            </Text>
            <TextInput
              size="lg"
              placeholder="Large input"
              value={value3}
              onChangeText={setValue3}
            />
          </Flex>
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
      <Flex align="center" justify="center" style={styles.container}>
        <Flex style={styles.showcase}>
          <Flex style={styles.inputWrapper}>
            <Text marginBottom={8} fontFamily="DMSans_500Medium">
              Normal
            </Text>
            <TextInput placeholder="Normal input" value={value1} onChangeText={setValue1} />
          </Flex>
          <Flex style={styles.inputWrapper}>
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
          <Flex style={styles.inputWrapper}>
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
      </Flex>
    );
  },
};

export const Password: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return (
      <Flex align="center" justify="center" style={styles.container}>
        <Flex style={styles.inputWrapper}>
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
      </Flex>
    );
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  showcase: {
    gap: 16,
    width: '100%',
    maxWidth: 400,
  },
  inputWrapper: {
    width: '100%',
    maxWidth: 400,
  },
});
