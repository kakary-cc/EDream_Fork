import React from 'react';
import { View, Text, Button } from 'react-native';

const QuizResult = ({ score, restartQuiz }) => {
    return (
        <View>
            <Text> Quiz Over!</Text>
            <Text> Your score is: {score} </Text>
        </View>
    );
};

export default QuizResult;