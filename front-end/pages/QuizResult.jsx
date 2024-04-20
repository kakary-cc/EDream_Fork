import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const QuizResult = ({ navigation, route }) => {
  // const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Quiz Over!</Text>
      <Text style={styles.description}>
        {" "}
        Your score is: {route.params.score}{" "}
      </Text>
      <Button title="Home" onPress={() => navigation.navigate("Home", {})} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: "gray",
  },
});

export default QuizResult;
