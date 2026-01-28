// Metro configuration for Expo
// Note: Storybook is loaded at runtime in app/_layout.tsx, not via Metro config
// This avoids ESM/CommonJS conflicts with @storybook/react-native/metro

const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

module.exports = config;
