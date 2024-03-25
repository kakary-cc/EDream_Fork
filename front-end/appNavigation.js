``jsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import QuizScreen from '../screens/quizScreen';
import ResultsScreen from '../screens/resultsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator> 
            <Stack.Screen name = "Quiz" component={quizScreen} />
            <Stack.Screen
                name = "Results"
                component = {restultsScreen}
                options = {{ headerShown: false }}
            
            />
        </Stack.Navigator>
    );
};

export default AppNavigator;