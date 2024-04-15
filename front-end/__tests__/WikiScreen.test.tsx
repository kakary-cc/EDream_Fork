import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import WikiArticleScreen from "../pages/WikiArticleScreen";

// Mocking react-navigation/native useNavigation hook
jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe("WikiArticleScreen", () => {
  test("renders correctly with article content", () => {
    const { getByText } = render(
      <WikiArticleScreen articleContent="Test article content" />
    );
    expect(getByText("Test article content")).toBeTruthy();
  });

  test('calls navigation.navigate with "Quiz" on "Take Quiz" button press', () => {
    const { getByText } = render(
      <WikiArticleScreen articleContent="Test article content" />
    );
    fireEvent.press(getByText("Take Quiz"));
    expect(navigation.navigate).toHaveBeenCalledWith("Quiz");
  });

  test('scrolls to top on "Reread Article" button press', () => {
    const { getByText } = render(
      <WikiArticleScreen articleContent="Test article content" />
    );
    // Mock scrollTo function of scrollViewRef.current
    const mockScrollTo = jest.fn();
    jest
      .spyOn(WikiArticleScreen.prototype, "scrollViewRef", "get")
      .mockReturnValue({ current: { scrollTo: mockScrollTo } });
    fireEvent.press(getByText("Reread Article"));
    expect(mockScrollTo).toHaveBeenCalledWith({ y: 0, animated: true });
  });

  // You can add more tests as needed
});
