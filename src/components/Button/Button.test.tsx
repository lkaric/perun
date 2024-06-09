import { screen, render, fireEvent } from "@testing-library/react";

import { Button } from "./Button";

describe("Button", () => {
  it("Should render the appropriate text", () => {
    render(<Button data-testid="target">Test</Button>);

    const component = screen.getByTestId("target");

    expect(component).toHaveTextContent("Test");
  });

  it("Should call the appropriate handler", () => {
    const mockOnClick = vi.fn();

    render(
      <Button data-testid="target" onClick={mockOnClick}>
        Test
      </Button>
    );

    const component = screen.getByTestId("target");

    fireEvent.click(component);

    expect(mockOnClick).toHaveBeenCalled();
  });

  it("Should use asChild appropriately", () => {
    render(
      <Button data-testid="target" asChild>
        <a href="#">Test</a>
      </Button>
    );

    const component = screen.getByTestId("target");

    expect(component).toHaveTextContent("Test");
    expect(component).toHaveClass("btn", "btn-primary", "btn-md");
  });
});
