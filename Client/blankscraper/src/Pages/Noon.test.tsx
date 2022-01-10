import { act, getAllByTestId, render } from "@testing-library/react";
import NoonPage from "./Noon";
import { data as mockData } from "./__mocks__/noonmock";
import axios from "axios";

jest.mock("axios");

let containerPlaceholder: HTMLElement | null = null;
beforeEach(async function () {
  (axios.get as jest.Mock).mockImplementationOnce(() =>
    Promise.resolve({ data: mockData })
  );
  containerPlaceholder = render(<NoonPage />).container;
  await act(async () => {});
});

it("should render a card for each item received", async () => {
  const container = containerPlaceholder as HTMLElement;
  const items = getAllByTestId(container, "card");
  expect(items.length).toEqual(mockData.length);
});
