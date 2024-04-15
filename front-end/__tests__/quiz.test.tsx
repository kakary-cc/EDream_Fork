import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import QuizScreen from './pages/QuizScreen';

describe('QuizScreen', () => {
  test('renders correctly with initial question and score', () => {
    const { getByText } = render(<QuizScreen />);
    expect(getByText('')).toBeTruthy(); // Replace '' with your actual initial question
    expect(getByText('Score: 0')).toBeTruthy();
  });

  test('updates score and moves to next question on answering correctly', () => {
    const { getByText } = render(<QuizScreen />);
    fireEvent.press(getByText('Correct Option')); // Replace 'Correct Option' with your actual correct option
    expect(getByText('Score: 25')).toBeTruthy();
    expect(getByText('Next Question')).toBeTruthy(); // Replace 'Next Question' with your actual next question text
  });

});