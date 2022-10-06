import { render } from "@testing-library/react";
import App from "./App";

const mockRoute = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Route: (props: any) => {
    mockRoute(props);
    return <div />;
  },
  Routes: (props: any) => {
    return <div>{props.children}</div>;
  },
  Router: (props: any) => {
    return <div>{props.children}</div>;
  },
}));

let containerPlaceholder: HTMLElement | null = null;

beforeEach(function () {
  containerPlaceholder = render(<App />).container;
});

it("should render a route for each path", () => {
  const container = containerPlaceholder as HTMLElement;
  expect(mockRoute).toHaveBeenCalledWith(
    expect.objectContaining({
      path: "/",
    })
  );
  expect(mockRoute).toHaveBeenCalledWith(
    expect.objectContaining({
      path: "/amazonscraper",
    })
  );
  expect(mockRoute).toHaveBeenCalledWith(
    expect.objectContaining({
      path: "/noonscraper",
    })
  );
  expect(mockRoute).toHaveBeenCalledWith(
    expect.objectContaining({
      path: "/alibabascraper",
    })
  );
});
