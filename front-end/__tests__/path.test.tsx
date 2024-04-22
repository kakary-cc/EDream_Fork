import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Pathway from '../pages/Pathway';
import {describe, expect, test, jest} from '@jest/globals';

describe('Pathway', () => {
  test('renders correctly with initial state', () => {
    const { getByText, getByTestId } = render(<Pathway navigation={{ navigate: jest.fn() }} />);
    expect(getByTestId('module-0')).toBeTruthy();
    expect(getByText('Introduction')).toBeTruthy();
    expect(getByText('Complete Path')).toBeTruthy();
  });

  test('scrolls to top on button press', () => {
    const scrollViewMock = {
      current: {
        scrollTo: jest.fn(),
      },
    };
    const { getByTestId } = render(<Pathway navigation={{ navigate: jest.fn() }} />);
    Pathway.prototype.scrollViewRef = scrollViewMock;
    fireEvent.press(getByTestId('complete-path-button'));
    expect(scrollViewMock.current.scrollTo).toHaveBeenCalledWith({ y: 0, animated: true });
  });

});
