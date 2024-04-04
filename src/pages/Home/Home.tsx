import Tags from "./components/Tags/Tags";
import { Box, Container } from "@mui/material";
import Topbar from "./components/Topbar/Topbar";

const Home = () => {
  return (
    <Box display="flex" flexDirection="column" gap={4} pb={4}>
      <Topbar />
      <Container>
        <Tags />
      </Container>
    </Box>
  );
};
export default Home;
