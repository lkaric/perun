import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Button, type ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  component: Button,
  args: {
    onClick: action("on-click"),
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    children: "Button",
    size: "md",
    variant: "primary",
  },
  name: "Button",
};

export const AsChild: Story = {
  args: {
    children: <a href="#">Link Button</a>,
    asChild: true,
    size: "md",
    variant: "primary",
  },
};
