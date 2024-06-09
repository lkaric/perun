import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip as TooltipBase, type TooltipProps } from "./Tooltip";

const Tooltip = ({ children, ...rest }: TooltipProps) => (
  <TooltipBase {...rest}>{children}</TooltipBase>
);

const meta: Meta<TooltipProps> = {
  component: Tooltip,
};

export default meta;

type Story = StoryObj<TooltipProps>;

export const Preview: Story = {
  args: {
    children: "Hover me",
    content: "Tooltip content!",
  },
};
