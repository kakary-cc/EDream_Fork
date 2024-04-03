import React from 'react';
import { View, Text, Button } from 'react-native';

const resultsScreen = ({ score, restartQuiz }) => {
    return (
        <view>
            <Text> Quiz Over!</Text>
            <Text> Your score is: {score} </Text>
        </view>
    );
};

export default resultsScreen;