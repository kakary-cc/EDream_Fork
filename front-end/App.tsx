// import React, { Component, useState, useEffect } from "react";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-url-polyfill/auto";
// import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
// import { Session } from "@supabase/supabase-js";

// import { supabase } from "./api/supabase";
// import Auth from "./components/Auth";
// import Account from "./components/Account";
// import DebugPage from "./pages/Debug";
// import ProfileScreen from "./pages/Profile";
// import LoginForm from "./pages/LoginForm";
// import WikipediaArticleScreen from "./pages/WikiArticleScreen";
// import QuizScreen from "./pages/Quiz";
// import QuizResult from "./pages/QuizResult";
// import UserProfileScreen from "./pages/UserProfileScreen";
import BottomTabNavigator from "./components/BottomTabNavigator";
// import LearningPathwaysScreen from "./pages/Pathways";

import { registerRootComponent } from "expo";
// // import React from "react";
import { View } from "react-native";

// import { LogBox } from "react-native";
// LogBox.ignoreLogs(["new NativeEventEmitter"]); // Ignore log notification by message
// LogBox.ignoreAllLogs(); //Ignore all log notifications

class App extends React.Component {
  render() {
    return (
      // <View />;
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    );
  }
}

registerRootComponent(App);

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <BottomTabNavigator />
//     </NavigationContainer>
//   );
//   // return <NavigationContainer></NavigationContainer>;
// };

export default App;
