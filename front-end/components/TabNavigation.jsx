import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import UserProfileScreen from "../pages/UserProfileScreen";

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return <UserProfileScreen />;
}

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
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
      <Tab.Screen name="Recommendation" component={HomeScreen} />
      <Tab.Screen name="Learning Pathway" component={SettingsScreen} />
      <Tab.Screen name="Personal Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
