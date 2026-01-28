import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useRef, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { BottomSheet, BottomSheetView, Flex, Text, Button } from 'testing-twigs';
import type GorhomBottomSheet from '@gorhom/bottom-sheet';

const BottomSheetMeta: Meta<typeof BottomSheet> = {
  title: 'Components/BottomSheet',
  component: BottomSheet,
};

export default BottomSheetMeta;

type Story = StoryObj<typeof BottomSheet>;

export const Basic: Story = {
  render: () => {
    const bottomSheetRef = useRef<GorhomBottomSheet>(null);
    const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);

    const handleOpen = () => {
      bottomSheetRef.current?.expand();
    };

    const handleClose = () => {
      bottomSheetRef.current?.close();
    };

    return (
      <Flex style={styles.container}>
        <Button onPress={handleOpen}>Open Bottom Sheet</Button>

        <BottomSheet ref={bottomSheetRef} index={-1} snapPoints={snapPoints} enablePanDownToClose>
          <BottomSheetView style={styles.contentContainer}>
            <Text fontSize={20} fontFamily="DMSans_700Bold" marginBottom={16}>
              Bottom Sheet Content
            </Text>
            <Text marginBottom={16}>
              This is a basic bottom sheet. Drag it up or down to snap to different heights.
            </Text>
            <Button onPress={handleClose} color="secondary">
              Close
            </Button>
          </BottomSheetView>
        </BottomSheet>
      </Flex>
    );
  },
};

export const WithTitle: Story = {
  render: () => {
    const bottomSheetRef = useRef<GorhomBottomSheet>(null);
    const snapPoints = useMemo(() => ['40%', '70%'], []);

    const handleOpen = () => {
      bottomSheetRef.current?.expand();
    };

    return (
      <Flex style={styles.container}>
        <Button onPress={handleOpen}>Open Sheet with Title</Button>

        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          snapPoints={snapPoints}
          title="Sheet Title"
          enablePanDownToClose
        >
          <BottomSheetView style={styles.contentContainer}>
            <Text marginBottom={12}>This bottom sheet has a title in the header.</Text>
            <Text marginBottom={16}>
              You can customize the header style and add custom components.
            </Text>
          </BottomSheetView>
        </BottomSheet>
      </Flex>
    );
  },
};

export const MultipleSnapPoints: Story = {
  render: () => {
    const bottomSheetRef = useRef<GorhomBottomSheet>(null);
    const snapPoints = useMemo(() => ['15%', '35%', '60%', '90%'], []);

    const handleOpen = () => {
      bottomSheetRef.current?.snapToIndex(1);
    };

    const handleSnapTo = (index: number) => {
      bottomSheetRef.current?.snapToIndex(index);
    };

    return (
      <Flex style={styles.container}>
        <Button onPress={handleOpen}>Open Multi-Snap Sheet</Button>

        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          snapPoints={snapPoints}
          title="Multiple Snap Points"
          enablePanDownToClose
        >
          <BottomSheetView style={styles.contentContainer}>
            <Text fontSize={16} fontFamily="DMSans_500Medium" marginBottom={16}>
              Snap to different heights:
            </Text>
            <Flex style={styles.buttonGroup}>
              <Button size="sm" onPress={() => handleSnapTo(0)}>
                15%
              </Button>
              <Button size="sm" onPress={() => handleSnapTo(1)}>
                35%
              </Button>
              <Button size="sm" onPress={() => handleSnapTo(2)}>
                60%
              </Button>
              <Button size="sm" onPress={() => handleSnapTo(3)}>
                90%
              </Button>
            </Flex>
          </BottomSheetView>
        </BottomSheet>
      </Flex>
    );
  },
};

export const CustomStyling: Story = {
  render: () => {
    const bottomSheetRef = useRef<GorhomBottomSheet>(null);
    const snapPoints = useMemo(() => ['50%', '80%'], []);

    const handleOpen = () => {
      bottomSheetRef.current?.expand();
    };

    return (
      <Flex style={styles.container}>
        <Button onPress={handleOpen}>Open Styled Sheet</Button>

        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          snapPoints={snapPoints}
          title="Custom Styled Sheet"
          enablePanDownToClose
          style={styles.customSheet}
          handleStyle={styles.customHandle}
          handleIndicatorStyle={styles.customIndicator}
          headerStyle={styles.customHeader}
        >
          <BottomSheetView style={styles.customContent}>
            <Text color="#fff" marginBottom={12}>
              This bottom sheet has custom styling applied.
            </Text>
            <Text color="#fff" fontSize={12}>
              Background, handle, indicator, and header are all customized.
            </Text>
          </BottomSheetView>
        </BottomSheet>
      </Flex>
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
  buttonGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  customSheet: {
    backgroundColor: '#1a237e',
  },
  customHandle: {
    backgroundColor: '#1a237e',
  },
  customIndicator: {
    backgroundColor: '#fff',
  },
  customHeader: {
    backgroundColor: '#1a237e',
  },
  customContent: {
    padding: 20,
    backgroundColor: '#1a237e',
  },
});
