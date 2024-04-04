import type { Meta, StoryObj } from "@storybook/react";
import Pagination from "./Pagination";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const meta: Meta<typeof Pagination> = {
  title: "Pages/Home/Topbar/Pagination",
  component: Pagination,
  decorators: [
    (Story) => <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>,
  ],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {};
