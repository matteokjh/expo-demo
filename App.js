import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/pages/home-page";
import AbilityTest from "./src/pages/ability-test";
import SettingsScreen from "./src/pages/setting-page";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { ApplicationProvider, Icon, IconRegistry } from "@ui-kitten/components";

const getTabTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "home";
  switch (routeName) {
    case "home":
      return "Home";
    case "settings":
      return "Settings";
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
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Icon
              name="home"
              fill={color}
              style={{
                width: 26,
                height: 26,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <Icon
              name="settings"
              fill={color}
              style={{
                width: 26,
                height: 26,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <ApplicationProvider {...eva} theme={eva.light}>
        <IconRegistry icons={EvaIconsPack} />
        <Stack.Navigator>
          <Stack.Screen
            name="tabs"
            component={Tabs}
            options={({ route }) => ({
              headerTitle: getTabTitle(route),
            })}
          />
          <Stack.Screen
            name="ability-test"
            options={({ route }) => ({
              headerTitle: "Ability Test",
            })}
            component={AbilityTest}
          />
        </Stack.Navigator>
      </ApplicationProvider>
    </NavigationContainer>
  );
}
