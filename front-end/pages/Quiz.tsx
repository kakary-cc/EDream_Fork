import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { supabase } from "../api/supabase";

const QuizScreen = () => {
  const [quiz, setQuiz] = useState([]);
  const [question, setQuestion] = useState([]);
  const [score, setScore] = useState(0);

  const fetchQuestions = async () => {
    let result;
    try {
      result = await supabase
        .from("Content")
        .select(`quiz`)
        .eq(`title`, `The Grands Boulevards`); // TODO: hardcoded
      result = result?.data?.[0]?.quiz;
      setQuiz([JSON.parse(result)]);
    } catch (error) {
      throw "Failed to fetch questions.";
    }
    // console.log(quiz);
  };

  //   const questions = [
  //     {
  //       question: "",
  //       options: [],
  //       correctAnswer: "",
  //     },
  //   ];

  const handleAnswer = (answer: any) => {
    // const isCorrect = answer === quiz[questions].correctAnswer;
    const isCorrect = true; // TODO: hardcoded
    if (isCorrect) {
      setScore(score + 25);
    }
    const nextQuestion = question + 1;
    if (nextQuestion < questions.length) {
      setQuestion(nextQuestion);
    } else {
      console.log("12");
    }
  };

  useEffect(() => {
    fetchQuestions();
    console.log(quiz);
    console.log(Object.getPrototypeOf(quiz));
  }, []);

  return (
    <View>
      <Text>{quiz?.[0]?.question}</Text>
      {quiz?.[0]?.options.map((option, index) => (
        <Button
          key={index}
          title={option}
          onPress={() => handleAnswer(option)}
        />
      ))}
      <Text>Score: {score}</Text>
    </View>
  );
};

export default QuizScreen;
