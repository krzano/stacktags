import { IconButton, Paper, Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

interface FetchingErrorBoxProps {
  refreshFunction?: () => void;
  message?: string;
}

const FetchingErrorBox = ({
  message = "Something went wrong...",
  refreshFunction = () => {
    location.reload();
  },
}: FetchingErrorBoxProps) => {
  return (
    <Paper
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        margin: "0 auto",
        p: 4,
        maxWidth: 400,
        textAlign: "center",
      }}
    >
      <IconButton
        sx={{
          position: "absolute",
          top: 4,
          right: 4,
        }}
        onClick={refreshFunction}
      >
        <RefreshIcon fontSize="large" />
      </IconButton>
      <Typography fontSize={40} color="error">
        Error!
      </Typography>
      <Typography component="h2" fontSize={24}>
        {message}
      </Typography>
      <Typography>Refresh, or try again later.</Typography>
    </Paper>
  );
};
export default FetchingErrorBox;
