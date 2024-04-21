import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Recommendations from "./pages/Recommendations";
import Pathway from "./pages/Pathway";
import UserProfileScreen from "./pages/UserProfileScreen";
import DebugPage from "./pages/Debug";
import StackNavigator from "./components/NativeStackNavigator";

function Screen1() {
  return <Recommendations />;
}

function Screen2() {
  return <Pathway />;
}

function Screen3() {
  return <UserProfileScreen />;
}

function Screen0() {
  return <DebugPage />;
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case "Personal Profile":
                iconName = focused ? "account" : "account-outline";
                break;
              case "Recommendation":
                iconName = focused ? "school" : "school-outline";
                break;
              case "Learning Pathway":
                iconName = focused ? "map" : "map-outline";
                break;
              default:
                iconName = "progress-question";
                break;
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarShowLabel: false, // hides the label
        })}
      >
        <Tab.Screen name="Recommendation" component={Screen1} />
        <Tab.Screen name="Learning Pathway" component={Screen2} />
        <Tab.Screen name="Personal Profile" component={Screen3} />
        {/* Comment the following line out to hide the debug page */}
        <Tab.Screen name="Debug" component={StackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
