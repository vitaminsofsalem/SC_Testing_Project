import { getByTestId, render } from "@testing-library/react";
import Card from "./Card";

it("should render image", () => {
  const container = render(
    <Card
      price="$20"
      title="Title"
      url="https://google.com"
      image={require("../Resources/iphoneImages/i11/Black11Alpha.png")}
    />
  ).container;

  expect(getByTestId(container, "image")).toBeTruthy();
});

it("should render no image text", () => {
  const container = render(
    <Card price="$20" title="Title" url="https://google.com" />
  ).container;

  expect(getByTestId(container, "no-image-p")).toBeTruthy();
});

it("should render title correctly", () => {
  const container = render(
    <Card
      price="$20"
      title="Title"
      url="https://google.com"
      image={require("../Resources/iphoneImages/i11/Black11Alpha.png")}
    />
  ).container;

  const title = getByTestId(container, "title");
  expect(title.textContent).toEqual("Title");
});

it("should render dollar price correctly", () => {
  const container = render(
    <Card
      price="$20"
      title="Title"
      url="https://google.com"
      image={require("../Resources/iphoneImages/i11/Black11Alpha.png")}
    />
  ).container;

  const price = getByTestId(container, "price");
  expect(price.textContent).toEqual("$20");
});

it("should render EGP price correctly", () => {
  const container = render(
    <Card
      price="20"
      title="Title"
      url="https://google.com"
      image={require("../Resources/iphoneImages/i11/Black11Alpha.png")}
    />
  ).container;

  const price = getByTestId(container, "price");
  expect(price.textContent).toEqual("20 EGP");
});

it("should render multiple price correctly", () => {
  const container = render(
    <Card
      price="Multiple prices"
      title="Title"
      url="https://google.com"
      image={require("../Resources/iphoneImages/i11/Black11Alpha.png")}
    />
  ).container;

  const price = getByTestId(container, "price");
  expect(price.textContent).toEqual("Multiple prices");
});

it("should open URL in seperate tab when clicked", () => {
  const container = render(
    <Card
      price="Multiple prices"
      title="Title"
      url="https://google.com"
      image={require("../Resources/iphoneImages/i11/Black11Alpha.png")}
    />
  ).container;

  //Mocks window.open
  const open = jest.fn();
  global.open = open;

  getByTestId(container, "card").click();
  expect(open).lastCalledWith("https://google.com", "_blank");
});
