import {
  Paper,
  TableContainer,
  Table as MuiTable,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Typography,
  TableProps as MuiTableProps,
  TableSortLabel,
} from "@mui/material";
import TableLoadingBackdrop from "./components/TableLoadingBackdrop/TableLoadingBackdrop";
import styled, { css } from "styled-components";

export type SortableColumn<TSortBy> = {
  isSortable: true;
  sortKey: TSortBy;
};

export type BasicColumn = {
  isSortable: false;
};

export type Columns<TSortBy, TItem> = ((SortableColumn<TSortBy> | BasicColumn) & {
  align: MuiTableProps["align"];
  label: string;
  render: (item: TItem) => React.ReactNode;
})[];

export type TableProps<TSortBy, TItem> = {
  itemsArray: TItem[];
  columns: Columns<TSortBy, TItem>;
  isLoading: boolean;
  sortBy: TSortBy;
  sortOrder: "asc" | "desc";
  onSortByChange: (sortByValue: TSortBy) => void;
  onSortOrderChange: (sortOrderValue: TableProps<TSortBy, TItem>["sortOrder"]) => void;
};

const Table = <TSortBy, TItem>({
  itemsArray,
  columns,
  isLoading,
  sortBy,
  sortOrder,
  onSortByChange,
  onSortOrderChange,
}: TableProps<TSortBy, TItem>) => {
  return (
    <Paper sx={{ overflow: "hidden" }}>
      <TableContainer sx={{ width: 1 / 1 }}>
        <StyledTable>
          <TableHead>
            <TableRow
              sx={{
                textTransform: "capitalize",
                fontWeight: 700,
              }}
            >
              {columns.map((column) =>
                column.isSortable ? (
                  <TableCell key={column.label} align={column.align}>
                    <TableSortLabel
                      disabled={isLoading}
                      active={sortBy === column.sortKey}
                      direction={sortBy === column.sortKey ? sortOrder : "asc"}
                      onClick={() => {
                        onSortByChange(column.sortKey);
                        onSortOrderChange(
                          sortBy === column.sortKey
                            ? sortOrder === "asc"
                              ? "desc"
                              : "asc"
                            : "asc",
                        );
                      }}
                    >
                      <Typography fontWeight="inherit">{column.label}</Typography>
                    </TableSortLabel>
                  </TableCell>
                ) : (
                  <TableCell key={column.label} align={column.align}>
                    <Typography fontWeight="inherit" color={(theme) => theme.palette.grey[700]}>
                      {column.label}
                    </Typography>
                  </TableCell>
                ),
              )}
            </TableRow>
          </TableHead>
          <TableBody sx={{ position: "relative" }}>
            <TableLoadingBackdrop open={isLoading} />
            {itemsArray.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length}>
                  <Typography py={3} color={(theme) => theme.palette.grey[500]}>
                    No data to display...
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              itemsArray.map((item, index) => (
                <TableRow key={index}>
                  {columns.map(({ align, render, label }) => (
                    <TableCell key={`${label}-${index}`} align={align}>
                      {render(item)}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </StyledTable>
      </TableContainer>
      <Box py={1} />
    </Paper>
  );
};

const StyledTable = styled(MuiTable)`
  ${({ theme }) => css`
    width: 100%;
    overflow: hidden;
    .MuiTableCell-root {
      padding: ${theme.spacing(2)} ${theme.spacing(4)};
    }
    .MuiTableHead-root {
      .MuiTableRow-root {
        background: linear-gradient(
          180deg,
          ${theme.palette.grey[100]} 0%,
          ${theme.palette.grey[200]} 160%
        );
      }
    }
    .MuiTableBody-root {
      .MuiTableRow-root {
        transition: background-color 0.3s;
        &:hover {
          background-color: ${theme.palette.grey[50]};
        }
      }
    }
  `};
`;

export default Table;
