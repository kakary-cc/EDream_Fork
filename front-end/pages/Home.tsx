import React from "react";

import {
  // StyleSheet,
  Button,
  View,
  // SafeAreaView,
  // Text,
  // Alert,
} from "react-native";

const HomeScreen = ({ navigation }: any) => {
  return (
    <View>
      <Button
        title="Jump to Profile"
        onPress={() => navigation.navigate("Profile", { name: "ExampleUser" })}
      />
      <Button
        title="Login Form"
        onPress={() => navigation.navigate("Login", {})}
      />
      <Button
        title="Quiz"
        onPress={() => navigation.navigate("Quiz", {})}
      />
      <Button
        title="Landing Page"
        onPress={() => navigation.navigate("Landing Page", {})}
      />
    </View>
  );
};

export default HomeScreen;
