import type { Meta, StoryObj } from "@storybook/react";
import Error from "./Error";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Error />,
  },
]);

const meta: Meta<typeof Error> = {
  title: "Pages/Error",
  component: Error,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [() => <RouterProvider router={router} />],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PagePreview: Story = {};
