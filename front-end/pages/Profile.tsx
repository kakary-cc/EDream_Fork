import React from "react";

import {
//   StyleSheet,
//   Button,
//   View,
//   SafeAreaView,
  Text,
//   Alert,
} from "react-native";

const ProfileScreen = ({ navigation, route }: any) => {
  return <Text>This is {route.params.name}&aposs profile.</Text>;
};

export default ProfileScreen;
