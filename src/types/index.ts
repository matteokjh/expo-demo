import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  tabs: undefined;
  'ability-test': undefined;
  'ability-detail': {
    title: string;
  };
};

export type MainBottomTabParamList = {
  home: undefined;
  settings: undefined;
};

export type HomeNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<MainBottomTabParamList, 'home'>,
  NativeStackNavigationProp<RootStackParamList, 'tabs'>
>;

export type AbilityTestProps = NativeStackNavigationProp<
  RootStackParamList,
  'ability-test'
>;

export type AbilityDetailProps = NativeStackNavigationProp<
  RootStackParamList,
  'ability-detail'
>;

export type TabBarIcon = (props: {
  focused: boolean;
  color: string;
  size: number;
}) => React.ReactNode;
