import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import { Flex, TwigsProvider, defaultTheme, BottomSheetModalProvider } from 'testing-twigs';
import { StorybookProvider, useStorybookToggle } from '@/lib/StorybookContext';
import {
  useFonts,
  DMSans_400Regular,
  DMSans_400Regular_Italic,
  DMSans_500Medium,
  DMSans_500Medium_Italic,
  DMSans_700Bold,
  DMSans_700Bold_Italic,
} from '@expo-google-fonts/dm-sans';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

SplashScreen.preventAutoHideAsync();

// eslint-disable-next-line @typescript-eslint/no-require-imports
const StorybookUIRoot = require('../.rnstorybook').default;

function RootLayoutContent() {
  const { showStorybook } = useStorybookToggle();

  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_400Regular_Italic,
    DMSans_500Medium,
    DMSans_500Medium_Italic,
    DMSans_700Bold,
    DMSans_700Bold_Italic,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  if (showStorybook && StorybookUIRoot) {
    return (
      <Flex style={styles.storybookContainer}>
        <StorybookUIRoot />
      </Flex>
    );
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}

export default function RootLayout() {
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

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TwigsProvider theme={theme}>
        <BottomSheetModalProvider>
          <StorybookProvider>
            <RootLayoutContent />
          </StorybookProvider>
        </BottomSheetModalProvider>
      </TwigsProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  storybookContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
