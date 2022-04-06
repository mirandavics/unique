import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./index";

describe("Button Component", () => {
  test("Click", () => {
    const functionButton = jest.fn();
    render(<Button label="Button" onClick={functionButton} />);

    fireEvent.click(screen.getByTestId("button"));

    expect(functionButton).toHaveBeenCalled();
  });

  test("Color primary by default", () => {
    render(<Button label="Button" />);

    let classes = screen
      .getByTestId("button")
      .getAttribute("class")
      ?.toLocaleLowerCase();

    expect(classes?.includes("primary")).toBe(true);
  });

  test("Variant contained by default", () => {
    render(<Button label="Button" />);

    let classes = screen
      .getByTestId("button")
      .getAttribute("class")
      ?.toLocaleLowerCase();

    expect(classes?.includes("contained")).toBe(true);
  });
});
