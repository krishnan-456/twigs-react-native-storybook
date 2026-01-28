import { Platform } from 'react-native';
import { view } from './storybook.requires';

// AsyncStorage only works on native platforms, not web
let storage;
if (Platform.OS !== 'web') {
  const AsyncStorage = require('@react-native-async-storage/async-storage').default;
  storage = {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  };
}

const StorybookUIRoot = view.getStorybookUI({
  storage, // undefined on web, which is fine
  enableWebsockets: false,
  onDeviceUI: true,
});

export default StorybookUIRoot;
