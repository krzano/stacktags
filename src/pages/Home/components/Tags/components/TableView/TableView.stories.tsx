import type { Meta, StoryObj } from "@storybook/react";
import TableView from "./TableView";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const meta: Meta<typeof TableView> = {
  title: "Pages/Home/Tags/TableView",
  component: TableView,
  decorators: [
    (Story) => <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>,
  ],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {};
