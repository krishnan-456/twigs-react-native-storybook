import { Stack } from 'expo-router';
import { StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Flex, Text, TwigsProvider, defaultTheme, BottomSheetModalProvider } from 'testing-twigs';
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
const StorybookUIRoot = __DEV__ ? require('../.rnstorybook').default : null;

function RootLayoutContent() {
  const { showStorybook, setShowStorybook } = useStorybookToggle();

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

  if (__DEV__ && showStorybook && StorybookUIRoot) {
    return (
      <Flex style={styles.storybookContainer}>
        <Flex style={styles.storybookHeader}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => setShowStorybook(false)}
            accessibilityLabel="Back to App"
            accessibilityRole="button"
          >
            <Text style={styles.backButtonText}>← Back to App</Text>
          </TouchableOpacity>
        </Flex>
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

  if (__DEV__) {
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

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TwigsProvider theme={theme}>
        <BottomSheetModalProvider>
          <Stack screenOptions={{ headerShown: false }} />
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
  storybookHeader: {
    paddingTop: Platform.select({ ios: 50, android: 40 }),
    paddingHorizontal: 16,
    paddingBottom: 12,
    backgroundColor: '#f5f5f5',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#e0e0e0',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  backButton: {
    padding: 8,
    alignSelf: 'flex-start',
  },
  backButtonText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
  },
});
