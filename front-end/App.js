jsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/appNavigation';


const App = () => {
    return (
        <NavigationContainer>
            <appNavigation />
        </NavigationContainer>    
    );
};