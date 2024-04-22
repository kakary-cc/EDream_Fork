import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import UserProfileScreen from "./pages/UserProfileScreen";
import {describe, expect, test} from '@jest/globals';

// Mocking react-navigation/native useNavigation hook
jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe("UserProfileScreen", () => {
  test("renders correctly", () => {
    const { getByText } = render(<UserProfileScreen />);
    expect(getByText("REPLACE WITH USERS USERNAME")).toBeTruthy();
    expect(getByText("Learning points: FILL IN SCORE")).toBeTruthy();
    expect(getByText("Friends")).toBeTruthy();
    expect(getByText("Profile")).toBeTruthy();
    expect(getByText("Learning Pathways")).toBeTruthy();
  });

  test("navigates to FriendsScreen on Friends button press", () => {
    const { getByText } = render(<UserProfileScreen />);
    fireEvent.press(getByText("Friends"));
    expect(navigation.navigate).toHaveBeenCalledWith("FriendsScreen");
  });

  test("navigates to ProfileScreen on Profile button press", () => {
    const { getByText } = render(<UserProfileScreen />);
    fireEvent.press(getByText("Profile"));
    expect(navigation.navigate).toHaveBeenCalledWith("ProfileScreen");
  });

  test("navigates to LearningPathwaysScreen on Learning Pathways button press", () => {
    const { getByText } = render(<UserProfileScreen />);
    fireEvent.press(getByText("Learning Pathways"));
    expect(navigation.navigate).toHaveBeenCalledWith("LearningPathwaysScreen");
  });

  test("navigates to SettingsScreen on Settings button press", () => {
    const { getAllByTestId } = render(<UserProfileScreen />);
    fireEvent.press(getAllByTestId("SettingsButton")[0]);
    expect(navigation.navigate).toHaveBeenCalledWith("SettingsScreen");
  });
});
