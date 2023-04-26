import React from "react";
import { render, within, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const { getByText } = within(screen.getAllByText(/card/i)[0]);

  expect(getByText(/card/i)).toBeInTheDocument();
});
