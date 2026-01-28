import { StyleSheet } from 'react-native';
import { Flex, Text, Button } from 'testing-twigs';
import { useStorybookToggle } from '@/lib/StorybookContext';

export default function Index() {
  const { setShowStorybook } = useStorybookToggle();

  const handleOpenStorybook = () => {
    setShowStorybook(true);
  };

  return (
    <Flex style={styles.container}>
      <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>

      {__DEV__ && (
        <Button size="lg" onPress={handleOpenStorybook}>
          Open Storybook
        </Button>
      )}
    </Flex>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
});
