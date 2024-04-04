import type { Meta, StoryObj } from "@storybook/react";
import LoadingBackdrop from "./LoadingBackdrop";

const meta: Meta<typeof LoadingBackdrop> = {
  title: "Shared/LoadingBackdrop",
  component: LoadingBackdrop,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  args: {
    open: true,
  },
};
