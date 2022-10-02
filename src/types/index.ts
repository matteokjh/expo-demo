import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  tabs: undefined;
  'ability-test': undefined;
};

export type MainBottomTabParamList = {
  home: undefined;
  settings: undefined;
};

export type HomeNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<MainBottomTabParamList, 'home'>,
  NativeStackNavigationProp<RootStackParamList, 'tabs'>
>;

export type TabBarIcon = (props: {
  focused: boolean;
  color: string;
  size: number;
}) => React.ReactNode;
