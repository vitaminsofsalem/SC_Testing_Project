import Navbar from "./Navbar";
import { getAllByTestId, getByTestId, render } from "@testing-library/react";

const mockUseNavigation = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigation,
  useLocation: () => ({ pathname: "/" }),
}));

let containerPlaceholder: HTMLElement | null = null;

beforeEach(function () {
  containerPlaceholder = render(<Navbar />).container;
});

it("should render logo", () => {
  const container = containerPlaceholder as HTMLElement;
  expect(getByTestId(container, "logo")).toBeTruthy();
});

it("should render all menu items correctly", () => {
  const container = containerPlaceholder as HTMLElement;
  const menuButtons = getAllByTestId(container, "menu-button");
  expect(menuButtons.length).toEqual(4);
  expect(menuButtons[0].textContent).toEqual("All");
  expect(menuButtons[1].textContent).toEqual("Amazon");
  expect(menuButtons[2].textContent).toEqual("Noon");
  expect(menuButtons[3].textContent).toEqual("Alibaba");
});

it("should have item of current location as selected and remaining as unselected", () => {
  const container = containerPlaceholder as HTMLElement;
  const menuButtons = getAllByTestId(container, "menu-button");
  expect(menuButtons.length).toEqual(4);
  expect(menuButtons[0].textContent).toEqual("All");
  expect(menuButtons[0].className).toContain("btn-focus");
  expect(menuButtons[1].className).toContain("btn-normal");
  expect(menuButtons[2].className).toContain("btn-normal");
  expect(menuButtons[3].className).toContain("btn-normal");
});

it("should navigate to proper page when nav item clicked", () => {
  const container = containerPlaceholder as HTMLElement;
  const menuButtons = getAllByTestId(container, "menu-button");
  menuButtons[1].click();
  expect(mockUseNavigation).lastCalledWith("/amazonscraper");

  menuButtons[2].click();
  expect(mockUseNavigation).lastCalledWith("/noonscraper");

  menuButtons[3].click();
  expect(mockUseNavigation).lastCalledWith("/alibabascraper");

  menuButtons[0].click();
  expect(mockUseNavigation).lastCalledWith("/");
});
