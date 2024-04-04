import type { Meta, StoryObj } from "@storybook/react";
import Table from "./Table";
import { Chip } from "@mui/material";
import { Tag } from "@/types";
import formatActivityDate from "@/utils/formatActivityDate";

const meta: Meta<typeof Table<"activity" | "popular" | "name", Tag>> = {
  title: "Shared/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const WithData: Story = {
  args: {
    sortBy: "popular",
    sortOrder: "desc",
    onSortByChange: () => {},
    onSortOrderChange: () => {},
    itemsArray: [
      {
        last_activity_date: 1712221119,
        count: 2529189,
        name: "javascript",
      },
      {
        last_activity_date: 1712221043,
        count: 2192770,
        name: "python",
      },
      {
        last_activity_date: 1712221228,
        count: 1917488,
        name: "java",
      },
      {
        last_activity_date: 1712221358,
        count: 1615255,
        name: "c#",
      },
      {
        last_activity_date: 1712219734,
        count: 1464583,
        name: "php",
      },
    ],
    columns: [
      {
        label: "name",
        align: "center",
        isSortable: true,
        sortKey: "name",
        render: ({ name }) => <Chip label={name} />,
      },
      {
        label: "related questions",
        align: "left",
        isSortable: true,
        sortKey: "popular",
        render: ({ count }) => `${count} question${count === 1 ? "" : "s"}`,
      },
      {
        label: "last activity date",
        align: "left",
        isSortable: true,
        sortKey: "activity",
        render: ({ last_activity_date }) => formatActivityDate(last_activity_date),
      },
      {
        label: "Not sortable column",
        align: "left",
        isSortable: false,
        render: ({ last_activity_date }) => last_activity_date,
      },
    ],
  },
};

export const WithDataLoading: Story = {
  args: {
    ...WithData.args,
    isLoading: true,
  },
};
export const Empty: Story = {
  args: {
    ...WithData.args,
    itemsArray: [],
  },
};
