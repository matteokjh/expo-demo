import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/pages/home-page';
import AbilityTest from './src/pages/ability-test';
import SettingsScreen from './src/pages/setting-page';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
  RouteProp,
  ParamListBase
} from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { Button as ButtonPlain, Alert } from 'react-native';
import SettingsIcon from './src/components/icons/settings-icon';
import HomeIcon from './src/components/icons/home-icon';
import AbilityDetail from './src/pages/ability-detail';

const getScreenOptions = (route: RouteProp<ParamListBase, 'tabs'>) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'home';
  switch (routeName) {
    case 'home':
      return {
        headerTitle: 'Home',
        headerRight: () => (
          <ButtonPlain
            title="info"
            onPress={() => Alert.alert('Info', 'This is an info.')}
          />
        )
      };
    case 'settings':
      return {
        headerTitle: 'Settings'
      };
    default:
      return {};
  }
};

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: HomeIcon
        }}
      />
      <Tab.Screen
        name="settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: SettingsIcon
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <ApplicationProvider {...eva} theme={eva.light}>
        <IconRegistry icons={EvaIconsPack} />
        <Stack.Navigator>
          <Stack.Screen
            name="tabs"
            component={Tabs}
            options={({ route }) => getScreenOptions(route)}
          />
          <Stack.Screen
            name="ability-test"
            options={() => ({
              headerTitle: 'ReactNative Abilities'
            })}
            component={AbilityTest}
          />
          <Stack.Screen
            name="ability-detail"
            options={({ route }) => ({
              headerTitle: route.params?.title
            })}
            component={AbilityDetail}
          />
        </Stack.Navigator>
      </ApplicationProvider>
    </NavigationContainer>
  );
};

export default App;
