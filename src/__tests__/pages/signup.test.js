import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { SignUp } from "../../pages";
import { FirebaseContext } from "../../context/firebase";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

const firebase = {
  auth: jest.fn(() => ({
    createUserWithEmailAndPassword: jest.fn(() =>
      Promise.resolve({
        user: {
          updateProfile: jest.fn(() => Promise.resolve("I am signed up!")),
        },
      })
    ),
  })),
};

describe("<SignUp />", () => {
  it("renders the sign up page with a form submission", async () => {
    const { getByTestId, getByPlaceholderText, queryByTestId } = render(
      <Router>
        <FirebaseContext.Provider value={{ firebase }}>
          <SignUp />
        </FirebaseContext.Provider>
      </Router>
    );

    await act(async () => {
      await fireEvent.change(getByPlaceholderText("First Name"), {
        target: { value: "testing" },
      });
      await fireEvent.change(getByPlaceholderText("Email Address"), {
        target: { value: "epiccoder7@gmail.com" },
      });
      await fireEvent.change(getByPlaceholderText("Password"), {
        target: { value: "testing123" },
      });
      fireEvent.click(getByTestId("sign-up"));

      expect(getByPlaceholderText("Email Address").value).toBe(
        "epiccoder7@gmail.com"
      );
      expect(getByPlaceholderText("Password").value).toBe("testing123");
      expect(queryByTestId("error")).toBeFalsy();
    });
  });
});
