import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import QuizResult from './pages/QuizResult';

describe('QuizResult', () => {
  test('renders correctly with score', () => {
    const { getByText } = render(<QuizResult score={10} />);
    expect(getByText('Quiz Over!')).toBeTruthy();
    expect(getByText('Your score is: 10')).toBeTruthy();
  });

  test('calls restartQuiz function on button press', () => {
    const restartMock = jest.fn();
    const { getByText } = render(<QuizResult score={10} restartQuiz={restartMock} />);
    fireEvent.press(getByText('Restart Quiz'));
    expect(restartMock).toHaveBeenCalledTimes(1);
  });
});