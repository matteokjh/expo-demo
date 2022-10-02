import { Button } from '@ui-kitten/components';
import React from 'react';
import { Text, View } from "react-native";
import { HomeScreenProps } from '../../types';

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    return (
      <View className="flex h-full bg-stone-900 items-center">
        <Text className="text-gray-400 text-5xl font-bold pt-10 pb-5">Hello World!</Text>
        <Button onPress={() => navigation.navigate("ability-test")}>Abilities Demo</Button>
      </View>
    );
  };



export default HomeScreen;