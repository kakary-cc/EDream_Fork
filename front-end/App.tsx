import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Recommendation from "./pages/Recommendation";
import Pathway from "./pages/Pathway";
import UserProfile from "./pages/UserProfile";
import DebugPage from "./pages/Debug";
import DebugStack from "./navigation/DebugStack";
import LearnStack from "./navigation/LearnStack";

function Screen1() {
  return <Recommendation />;
}

function Screen2() {
  return <Pathway />;
}

function Screen3() {
  return <UserProfile />;
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
              case "Get Learning":
                iconName = focused ? "school" : "school-outline";
                break;
              case "Your Pathway":
                iconName = focused ? "map" : "map-outline";
                break;
              case "Personal Profile":
                iconName = focused ? "account" : "account-outline";
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
        <Tab.Screen name="Get Learning" component={LearnStack} />
        <Tab.Screen name="Your Pathway" component={Screen2} />
        <Tab.Screen name="Personal Profile" component={Screen3} />
        {/* Comment the following line out to hide the debug page */}
        <Tab.Screen name="Debug" component={DebugStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
