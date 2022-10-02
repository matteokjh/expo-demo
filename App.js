import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#182747',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#D8D8D8',
    fontWeight: 'bold',
    fontSize: 45,
  },
});
