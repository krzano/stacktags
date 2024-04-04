import Table from "@/components/Table/Table";
import useTags from "@/hooks/useTags";
import { useStore } from "@/store";
import formatActivityDate from "@/utils/formatActivityDate";
import { Box, Chip } from "@mui/material";

const TableView = () => {
  const { order, sort } = useStore((store) => store.queryParams);
  const updateQueryParams = useStore((store) => store.updateQueryParams);
  const { data, isFetching } = useTags();

  return data ? (
    <Box display="flex" justifyContent="center">
      <Table
        itemsArray={data.items}
        isLoading={isFetching}
        sortBy={sort}
        sortOrder={order}
        onSortByChange={(sortByValue: typeof sort) => {
          updateQueryParams({ sort: sortByValue });
        }}
        onSortOrderChange={(sortOrderValue) => {
          updateQueryParams({ order: sortOrderValue });
        }}
        columns={[
          {
            isSortable: true,
            sortKey: "name",
            label: "name",
            align: "center",
            render: ({ name }) => {
              return <Chip label={name} />;
            },
          },
          {
            isSortable: true,
            sortKey: "popular",
            label: "related questions",
            align: "left",
            render: ({ count }) => {
              return `${count} question${count === 1 ? "" : "s"}`;
            },
          },
          {
            isSortable: true,
            sortKey: "activity",
            label: "last activity date",
            align: "left",
            render: ({ last_activity_date }) => formatActivityDate(last_activity_date),
          },
        ]}
      />
    </Box>
  ) : null;
};
export default TableView;
