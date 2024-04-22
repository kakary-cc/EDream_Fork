import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const QuizResult = ({ navigation, route }) => {
  const score = route.params.score;
  const pass = score >= 60;
  const fromPathway = route.params.fromPathway;
  // const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Over!</Text>
      <Text style={styles.description}>Your score is: {score}</Text>
      <Text style={styles.message}>
        {pass
          ? "🌟 Congratulations! 🌟 You've brilliantly passed the quiz, showcasing your knowledge and dedication."
          : "Keep Your Spark Alive! ✨ Though this quiz posed a challenge, remember, every question you encounter is a stepping stone to deeper understanding."}
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate(fromPathway ? "Pathway" : "Recommendation", {
            pass,
          })
        }
      >
        <Text style={styles.buttonText}>Finish</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: "black",
  },
  message: {
    marginTop: 20,
    fontSize: 15,
    color: "gray",
  },
  button: {
    marginTop: 30,
    padding: 16,
    width: "50%",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#2196F3",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default QuizResult;
