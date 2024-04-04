import useTags from "@/hooks/useTags";
import { useStore } from "@/store";
import { TablePagination } from "@mui/material";

const Pagination = () => {
  const { data, isFetching } = useTags();
  const page = useStore((store) => store.queryParams.page);
  const pagesize = useStore((store) => store.queryParams.pagesize);
  const updateQueryParams = useStore((store) => store.updateQueryParams);

  return (
    <TablePagination
      component="div"
      sx={{ ml: "auto" }}
      count={data ? data.total : 0}
      page={page - 1}
      rowsPerPage={pagesize}
      rowsPerPageOptions={[5, 10, 20, 30, 50, 100]}
      onPageChange={(_, newPage) => {
        updateQueryParams({ page: newPage + 1 });
      }}
      onRowsPerPageChange={(event) => {
        updateQueryParams({ pagesize: parseInt(event.target.value, 10) });
      }}
      labelRowsPerPage="Tags per page"
      slotProps={{
        actions: {
          previousButton: isFetching
            ? {
                disabled: true,
              }
            : undefined,
          nextButton: isFetching
            ? {
                disabled: true,
              }
            : undefined,
        },
      }}
    />
  );
};
export default Pagination;
