import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useRef } from 'react';
import { StyleSheet } from 'react-native';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
  Flex,
  Text,
  Button,
} from 'testing-twigs';
import type { BottomSheetModal as GorhomBottomSheetModal } from '@gorhom/bottom-sheet';

const BottomSheetModalMeta: Meta<typeof BottomSheetModal> = {
  title: 'Components/BottomSheetModal',
  component: BottomSheetModal,
};

export default BottomSheetModalMeta;

type Story = StoryObj<typeof BottomSheetModal>;

export const Basic: Story = {
  render: () => {
    const bottomSheetModalRef = useRef<GorhomBottomSheetModal>(null);

    const handleOpen = () => {
      bottomSheetModalRef.current?.present();
    };

    const handleClose = () => {
      bottomSheetModalRef.current?.dismiss();
    };

    return (
      <BottomSheetModalProvider>
        <Flex style={styles.container}>
          <Button onPress={handleOpen}>Open Modal</Button>

          <BottomSheetModal ref={bottomSheetModalRef} snapPoints={['50%', '75%']}>
            <BottomSheetView style={styles.contentContainer}>
              <Text fontSize={20} fontFamily="DMSans_700Bold" marginBottom={16}>
                Bottom Sheet Modal
              </Text>
              <Text marginBottom={16}>
                This is a modal bottom sheet. It appears above all content with a backdrop.
              </Text>
              <Button onPress={handleClose} color="secondary">
                Close Modal
              </Button>
            </BottomSheetView>
          </BottomSheetModal>
        </Flex>
      </BottomSheetModalProvider>
    );
  },
};

export const WithTitle: Story = {
  render: () => {
    const bottomSheetModalRef = useRef<GorhomBottomSheetModal>(null);

    const handleOpen = () => {
      bottomSheetModalRef.current?.present();
    };

    return (
      <BottomSheetModalProvider>
        <Flex style={styles.container}>
          <Button onPress={handleOpen}>Open Modal with Title</Button>

          <BottomSheetModal ref={bottomSheetModalRef} snapPoints={['60%']} title="Modal Title">
            <BottomSheetView style={styles.contentContainer}>
              <Text marginBottom={12}>This modal has a title in the header.</Text>
              <Text marginBottom={16}>Tap outside or swipe down to dismiss.</Text>
            </BottomSheetView>
          </BottomSheetModal>
        </Flex>
      </BottomSheetModalProvider>
    );
  },
};

export const DynamicContent: Story = {
  render: () => {
    const bottomSheetModalRef = useRef<GorhomBottomSheetModal>(null);

    const handleOpen = () => {
      bottomSheetModalRef.current?.present();
    };

    return (
      <BottomSheetModalProvider>
        <Flex style={styles.container}>
          <Button onPress={handleOpen}>Open Dynamic Modal</Button>

          <BottomSheetModal
            ref={bottomSheetModalRef}
            snapPoints={['40%', '70%', '90%']}
            title="Dynamic Content"
            enableDynamicSizing={false}
          >
            <BottomSheetView style={styles.contentContainer}>
              <Text fontSize={18} fontFamily="DMSans_700Bold" marginBottom={12}>
                Features
              </Text>
              <Flex style={styles.featureList}>
                <Text marginBottom={8}>✓ Multiple snap points</Text>
                <Text marginBottom={8}>✓ Backdrop overlay</Text>
                <Text marginBottom={8}>✓ Gesture handling</Text>
                <Text marginBottom={8}>✓ Keyboard aware</Text>
                <Text marginBottom={8}>✓ Custom styling</Text>
                <Text marginBottom={8}>✓ Accessibility support</Text>
              </Flex>
            </BottomSheetView>
          </BottomSheetModal>
        </Flex>
      </BottomSheetModalProvider>
    );
  },
};

export const CustomPressBehavior: Story = {
  render: () => {
    const bottomSheetModalRef = useRef<GorhomBottomSheetModal>(null);

    const handleOpen = () => {
      bottomSheetModalRef.current?.present();
    };

    return (
      <BottomSheetModalProvider>
        <Flex style={styles.container}>
          <Button onPress={handleOpen}>Open (No Dismiss on Press)</Button>

          <BottomSheetModal
            ref={bottomSheetModalRef}
            snapPoints={['50%']}
            title="Custom Press Behavior"
            pressBehavior="none"
          >
            <BottomSheetView style={styles.contentContainer}>
              <Text marginBottom={16}>
                This modal will not dismiss when you tap the backdrop. You must use the close
                button.
              </Text>
              <Button onPress={() => bottomSheetModalRef.current?.dismiss()} color="negative">
                Close
              </Button>
            </BottomSheetView>
          </BottomSheetModal>
        </Flex>
      </BottomSheetModalProvider>
    );
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  contentContainer: {
    padding: 20,
  },
  featureList: {
    gap: 4,
  },
});
