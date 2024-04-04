import type { Meta, StoryObj } from "@storybook/react";
import Home from "./Home";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const meta: Meta<typeof Home> = {
  title: "Pages/Home",
  component: Home,
  decorators: [
    (Story) => <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>,
  ],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PagePreview: Story = {};
