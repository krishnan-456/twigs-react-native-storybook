import type { Preview } from '@storybook/react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { TwigsProvider, Flex, defaultTheme, BottomSheetModalProvider } from 'testing-twigs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  useFonts,
  DMSans_400Regular,
  DMSans_400Regular_Italic,
  DMSans_500Medium,
  DMSans_500Medium_Italic,
  DMSans_700Bold,
  DMSans_700Bold_Italic,
} from '@expo-google-fonts/dm-sans';

const theme = {
  ...defaultTheme,
  fonts: {
    ...defaultTheme.fonts,
    regular: 'DMSans_400Regular',
    regularItalic: 'DMSans_400Regular_Italic',
    medium: 'DMSans_500Medium',
    mediumItalic: 'DMSans_500Medium_Italic',
    bold: 'DMSans_700Bold',
    boldItalic: 'DMSans_700Bold_Italic',
  },
};

const preview: Preview = {
  decorators: [
    (Story) => {
      const [fontsLoaded] = useFonts({
        DMSans_400Regular,
        DMSans_400Regular_Italic,
        DMSans_500Medium,
        DMSans_500Medium_Italic,
        DMSans_700Bold,
        DMSans_700Bold_Italic,
      });

      return (
        <GestureHandlerRootView style={{ flex: 1 }}>
          <TwigsProvider theme={theme}>
            <BottomSheetModalProvider>
              <Flex style={styles.container}>{fontsLoaded ? <Story /> : <Flex />}</Flex>
            </BottomSheetModalProvider>
          </TwigsProvider>
        </GestureHandlerRootView>
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default preview;
