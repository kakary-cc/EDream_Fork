import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { supabase } from "../api/supabase";
import { useNavigation } from "@react-navigation/native";

const TakeQuiz = () => {
  const [quiz, setQuiz] = useState([]);
  const [cur, setCur] = useState(0);
  const [question, setQuestion] = useState([]);
  const [score, setScore] = useState(0);

  const navigation = useNavigation();

  const fetchQuestions = async () => {
    let result;
    try {
      result = await supabase
        .from("Content")
        .select(`quiz`)
        .eq(`title`, `The Grands Boulevards`); // TODO: hardcoded

      let quiz = JSON.parse(result?.data?.[0]?.quiz);
      quiz = quiz?.questions;
      setQuiz(quiz);
      setQuestion(quiz?.[0]);
      setCur(() => cur + 1);
      // console.log("Quiz loaded.");
    } catch (error) {
      throw "Failed to fetch questions.";
    }
  };

  const handleAnswer = (answer) => {
    const isCorrect = answer === "correct answer"; // TODO: hardcoded
    if (isCorrect) {
      setScore(score + 20);
    }
    if (cur === quiz.length) {
      navigation.navigate("QuizResult", { score: score });
    }
    setQuestion(quiz?.[cur]);
    setCur(() => cur + 1);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.quizContainer}>
        <Text style={styles.questionText}>{question?.question}</Text>

        {question?.options?.map((option, index) => (
          <Button
            key={index}
            title={option}
            onPress={() => handleAnswer(option)}
          />
        ))}
      </View>
      <Text>Score: {score}</Text>
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
  quizContainer: {
    padding: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 20,
  },
  questionText: {
    fontSize: 16,
  },
});

export default TakeQuiz;
