import {
  act,
  getAllByTestId,
  getByTestId,
  render,
} from "@testing-library/react";
import AlibabaPage from "./Alibaba";
import { data as mockData } from "./__mocks__/alibabamock";
import axios from "axios";

jest.mock("axios");

it("should render a card for each item received", async () => {
  (axios.get as jest.Mock).mockImplementationOnce(() =>
    Promise.resolve({ data: mockData })
  );
  const container = render(<AlibabaPage />).container;
  await act(async () => {});
  const items = getAllByTestId(container, "card");
  expect(items.length).toEqual(mockData.length);
});

it("should render loading message", async () => {
  (axios.get as jest.Mock).mockImplementationOnce(() =>
    Promise.resolve({ data: [] })
  );
  const container = render(<AlibabaPage />).container;
  await act(async () => {});
  expect(getByTestId(container, "loading-text")).toBeTruthy();
});
