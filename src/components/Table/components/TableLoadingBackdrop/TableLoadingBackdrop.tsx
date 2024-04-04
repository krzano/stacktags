import LoadingBackdrop from "@/components/LoadingBackdrop/LoadingBackdrop";
import { TableCell, TableRow } from "@mui/material";

interface TableLoadingBackdropProps {
  open: boolean;
}

const TableLoadingBackdrop = ({ open }: TableLoadingBackdropProps) => {
  return (
    <TableRow>
      <TableCell
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          pointerEvents: "none",
        }}
      >
        <LoadingBackdrop open={open} />
      </TableCell>
    </TableRow>
  );
};

export default TableLoadingBackdrop;
