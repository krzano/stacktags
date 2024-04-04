import { Box, Container } from "@mui/material";
import SortMenu from "./components/SortMenu/SortMenu";
import Pagination from "./components/Pagination/Pagination";
import ViewToggle from "./components/ViewToggle/ViewToggle";
import Logo from "@/components/Logo/Logo";

const Topbar = () => {
  return (
    <Box
      sx={{
        zIndex: 1000,
        position: "sticky",
        top: 0,
        backgroundColor: (theme) => theme.palette.background.paper,
        borderBottom: 0,
        boxShadow: 2,
        borderColor: (theme) => theme.palette.grey[300],
      }}
    >
      <Container>
        <Logo my={2.5} height={26} />
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="flex-end"
          columnGap={4}
        >
          <Box display="flex" gap={4} pb={2}>
            <SortMenu />
            <ViewToggle />
          </Box>
          <Pagination />
        </Box>
      </Container>
    </Box>
  );
};
export default Topbar;
