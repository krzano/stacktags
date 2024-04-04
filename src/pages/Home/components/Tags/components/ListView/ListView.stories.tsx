import type { Meta, StoryObj } from "@storybook/react";
import ListView from "./ListView";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const meta: Meta<typeof ListView> = {
  title: "Pages/Home/Tags/ListView",
  component: ListView,
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
