import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import Account from "./components/Account";
import { supabase } from "../api/supabase";
import {describe, expect, test, jest, it} from '@jest/globals';

jest.mock("../api/supabase", () => ({
  supabase: {
    from: jest.fn(() => ({
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      single: jest.fn(),
      upsert: jest.fn(),
    })),
    auth: {
      signOut: jest.fn(),
    },
  },
}));

describe("Account component", () => {
  it("should render with email input disabled", () => {
    const { getByLabelText } = render(<Account session={{ user: { email: "test@example.com" } }} />);
    const emailInput = getByLabelText("Email");
    expect(emailInput.props.value).toBe("test@example.com");
    expect(emailInput.props.disabled).toBe(true);
  });

  it("should update username and website", async () => {
    const { getByLabelText, getByText } = render(<Account session={{ user: { id: 1 } }} />);
    const usernameInput = getByLabelText("Username");
    const websiteInput = getByLabelText("Website");

    fireEvent.changeText(usernameInput, "newUsername");
    fireEvent.changeText(websiteInput, "example.com");
    fireEvent.press(getByText("Update"));

    await waitFor(() => {
      expect(supabase.from().upsert).toHaveBeenCalledWith({
        id: 1,
        username: "newUsername",
        website: "example.com",
        avatar_url: "",
        updated_at: expect.any(Date),
      });
    });
  });

  it("should handle error during update", async () => {
    supabase.from().upsert.mockRejectedValueOnce(new Error("Update failed"));

    const { getByText } = render(<Account session={{ user: { id: 1 } }} />);
    fireEvent.press(getByText("Update"));

    await waitFor(() => {
      expect(getByText("Update failed")).toBeTruthy();
    });
  });

  it("should sign out when Sign Out button is pressed", () => {
    const { getByText } = render(<Account session={{}} />);
    fireEvent.press(getByText("Sign Out"));
    expect(supabase.auth.signOut).toHaveBeenCalledTimes(1);
  });
});