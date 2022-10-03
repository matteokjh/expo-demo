import { useNavigation } from '@react-navigation/native';
import { Button } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AbilityTestProps } from '../../types';
import { TEST_LIST } from './constants';

const styles = StyleSheet.create({
  Button: {
    marginBottom: 16
  }
});

const AbilityTest = () => {
  const navitation = useNavigation<AbilityTestProps>();

  return (
    <View className="min-h-full bg-white p-5">
      {TEST_LIST.map((e) => (
        <Button
          key={e.title}
          disabled={e.disabled}
          onPress={() =>
            navitation.navigate('ability-detail', {
              title: e.title
            })
          }
          style={styles.Button}
        >
          {e.title}
        </Button>
      ))}
    </View>
  );
};

export default AbilityTest;
