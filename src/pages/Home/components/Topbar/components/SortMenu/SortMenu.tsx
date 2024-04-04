import { useStore } from "@/store";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import LabelWrapper from "@/components/LabelWrapper/LabelWrapper";

const SortMenu = () => {
  const sort = useStore((store) => store.queryParams.sort);
  const order = useStore((store) => store.queryParams.order);
  const updateQueryParams = useStore((store) => store.updateQueryParams);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const orderIcon =
    order === "asc" ? <ArrowUpwardIcon fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />;
  const sortKeys: (typeof sort)[] = ["activity", "name", "popular"];
  return (
    <>
      <LabelWrapper label="Sort by">
        <Button
          color="inherit"
          variant="outlined"
          id="sort-button"
          aria-controls={open ? "sort-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={(e) => {
            setAnchorEl(e.currentTarget);
          }}
          endIcon={orderIcon}
        >
          {sort}
        </Button>
      </LabelWrapper>
      <Menu
        id="sort-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "sort-button",
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {sortKeys.map((sortKey) => (
          <MenuItem
            selected={sortKey === sort}
            key={sortKey}
            onClick={() => {
              updateQueryParams(
                sort === sortKey
                  ? { order: order === "asc" ? "desc" : "asc" }
                  : { sort: sortKey, order: "desc" },
              );
              handleClose();
            }}
          >
            <Box display="flex" gap={2} alignItems="center">
              <Typography textTransform="capitalize" fontWeight={sort === sortKey ? 500 : 400}>
                {sortKey}
              </Typography>
              {sort === sortKey ? orderIcon : null}
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
export default SortMenu;
