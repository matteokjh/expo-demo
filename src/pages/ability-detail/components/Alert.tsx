import { Button, Layout } from '@ui-kitten/components';
import { Alert, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    marginRight: 8,
    marginBottom: 8
  }
});

const AlertDemo = () => {
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') }
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed')
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') }
    ]);

  return (
    <Layout style={styles.container}>
      <Button style={styles.button} onPress={createTwoButtonAlert}>
        2-Button Alert
      </Button>
      <Button style={styles.button} onPress={createThreeButtonAlert}>
        3-Button Alert
      </Button>
    </Layout>
  );
};

export default AlertDemo;
