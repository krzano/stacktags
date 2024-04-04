import type { Meta, StoryObj } from "@storybook/react";
import SortMenu from "./SortMenu";

const meta: Meta<typeof SortMenu> = {
  title: "Pages/Home/Topbar/SortMenu",
  component: SortMenu,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {};
