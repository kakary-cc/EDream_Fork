import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const QuizScreen = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    questions = [
        {
            question: '',
            options: [],
            correctAnswer: ''
        },
    ];

    const handleAnswer = (answer) => {
        const isCorrect = answer === questions[currentQuestion].correctAnswer;
        if (isCorrect) {
            setScore(score + 25);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {

        }
    };

    return (
        <View>
            <Text>
                {questions[currentQuestion].question}
            </Text>
            {questions[currentQuestion].options.map((option, index) => (
                <Button key={index} title={option} onPress = {() => handleAnswer(option)} />
            ))}
            <Text>Score: {score}</Text>
        </View>
    );
};

export default quizScreen