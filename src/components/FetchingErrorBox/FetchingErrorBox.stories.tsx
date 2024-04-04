import type { Meta, StoryObj } from "@storybook/react";
import FetchingErrorBox from "./FetchingErrorBox";

const meta: Meta<typeof FetchingErrorBox> = {
  title: "Shared/FetchingErrorBox",
  component: FetchingErrorBox,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Preview: Story = {};
