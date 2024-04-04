import type { Meta, StoryObj } from "@storybook/react";
import LabelWrapper from "./LabelWrapper";
import { Button, Paper } from "@mui/material";

const meta: Meta<typeof LabelWrapper> = {
  title: "Shared/LabelWrapper",
  component: LabelWrapper,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const WithButton: Story = {
  args: {
    label: "Label",
    children: (
      <Button variant="outlined" color="inherit">
        Button
      </Button>
    ),
  },
};
export const WithPaper: Story = {
  args: {
    label: "Label",
    children: <Paper sx={{ py: 1, px: 2 }}>Paper</Paper>,
  },
};
