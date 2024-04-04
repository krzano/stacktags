import { Button, Container, Divider, Typography } from "@mui/material";
import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  let errorMessage = "Something went wrong...";
  if (isRouteErrorResponse(error) && error.status === 404) {
    errorMessage = "Page not found...";
  }
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        minHeight: "80vh",
      }}
    >
      <Typography variant="h2">Error</Typography>
      <Divider flexItem />
      <Typography variant="h3" fontSize={24}>
        {errorMessage}
      </Typography>
      <Button color="primary" variant="outlined" size="large" component={Link} to={"/"}>
        back home
      </Button>
    </Container>
  );
};
export default Error;
