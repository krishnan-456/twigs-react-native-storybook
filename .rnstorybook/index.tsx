import { Platform } from 'react-native';
import { view } from './storybook.requires';

// AsyncStorage only works on native platforms, not web
// On web, provide a mock in-memory storage to avoid errors
let storage;
if (Platform.OS !== 'web') {
  const AsyncStorage = require('@react-native-async-storage/async-storage').default;
  storage = {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  };
} else {
  // Mock storage for web (in-memory, no persistence)
  const memoryStorage: Record<string, string> = {};
  storage = {
    getItem: async (key: string) => memoryStorage[key] || null,
    setItem: async (key: string, value: string) => {
      memoryStorage[key] = value;
    },
  };
}

const StorybookUIRoot = view.getStorybookUI({
  storage,
  enableWebsockets: false,
  onDeviceUI: true,
});

export default StorybookUIRoot;
