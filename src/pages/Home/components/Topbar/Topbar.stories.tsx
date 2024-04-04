import type { Meta, StoryObj } from "@storybook/react";
import Topbar from "./Topbar";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const meta: Meta<typeof Topbar> = {
  title: "Pages/Home/Topbar",
  component: Topbar,
  decorators: [
    (Story) => <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>,
  ],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {};
