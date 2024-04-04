import type { Meta, StoryObj } from "@storybook/react";
import Logo from "./Logo";

const meta: Meta<typeof Logo> = {
  title: "Shared/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  args: {
    width: 300,
    maxWidth: "100%",
  },
};
