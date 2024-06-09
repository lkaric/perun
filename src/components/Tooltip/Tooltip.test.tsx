import { screen, render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { Tooltip } from "./Tooltip";

describe("Tooltip", () => {
  it("Should not exist if not hovered", async () => {
    render(<Tooltip content="Popping up!">Test</Tooltip>);

    const [content] = screen?.queryAllByText("Popping up!");

    expect(content).not.toBeDefined();
  });

  it("Should render the appropriate text", async () => {
    const user = userEvent.setup();

    render(<Tooltip content="Popping up!">Test</Tooltip>);

    const component = screen.getByText("Test");

    await user.hover(component);

    const [content] = await screen.findAllByText("Popping up!");

    expect(content).toBeDefined();
    expect(content).toHaveTextContent("Popping up!");
  });
});
