import type { StorybookConfig } from '@storybook/react-native';

const config: StorybookConfig = {
  stories: ['../src/stories/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: ['@storybook/addon-ondevice-controls'],
};

export default config;
