import React from "react";

import DebugPage from "../pages/Debug";
import ProfileScreen from "../pages/Profile";
import LoginForm from "../pages/LoginForm";
import WikipediaArticleScreen from "../pages/WikipediaArticle";
import QuizScreen from "../pages/Quiz";
import QuizResult from "../pages/QuizResult";
import UserProfileScreen from "../pages/UserProfileScreen";
import Pathway from "../pages/Pathway";

// const Stack = createNativeStackNavigator();

import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={DebugPage}
        options={{ title: "Welcome" }}
      />
      <Stack.Screen name="Login" component={LoginForm} />
      <Stack.Screen name="Profile" component={ProfileScreen} />

      <Stack.Screen
        name="Quiz"
        component={QuizScreen}
        options={{ title: "Quiz" }}
      />
      <Stack.Screen name="QuizResult" component={QuizResult} />
      <Stack.Screen
        name="WikipediaArticle"
        component={WikipediaArticleScreen}
        options={{ title: "Wikipedia Article" }}
      />
      <Stack.Screen name="Landing Page" component={UserProfileScreen} />
      <Stack.Screen name="Pathway" component={Pathway} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}
