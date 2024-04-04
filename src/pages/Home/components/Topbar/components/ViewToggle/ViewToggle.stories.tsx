import type { Meta, StoryObj } from "@storybook/react";
import ViewToggle from "./ViewToggle";

const meta: Meta<typeof ViewToggle> = {
  title: "Pages/Home/Topbar/ViewToggle",
  component: ViewToggle,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {};
