import { fireEvent, render, screen } from "@testing-library/react";
import CardsearchAutocomplete from "./CardsearchAutocomplete";
import { store } from "../../app/store";
import { Provider } from "react-redux";
import { useDebounce } from "../../app/utils/useDebounce";

jest.mock("../../app/utils/useDebounce");

const mockedDebounce = jest.mocked(useDebounce);

describe("CardsearchAutocomplete component", () => {
  it("displays on screen", () => {
    render(
      <Provider store={store}>
        <CardsearchAutocomplete />
      </Provider>
    );

    expect(screen.getAllByText(/Card/i)[0]).toBeVisible();
  });

  it("debounces searches", () => {
    render(
      <Provider store={store}>
        <CardsearchAutocomplete />
      </Provider>
    );
    fireEvent.change(screen.getByRole("combobox"), { value: "searching" });
    expect(mockedDebounce).toBeCalled();
  });
});
