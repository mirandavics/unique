import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TextField } from ".";

describe("Textfield Component", () => {
  test("Value required", () => {
    let field = "test";
    render(<TextField value={field} label="Field" name="field" />);

    expect(screen.getByDisplayValue(field)).toHaveValue(field);
  });

  test("Type value", () => {
    let value = "";
    const type = "password";

    render(<TextField value={value} type={type} label="Field" name="field" />);

    const input = screen.getByTestId("textfield").querySelector("input");

    expect(input).toHaveAttribute("type", type);
  });
});
