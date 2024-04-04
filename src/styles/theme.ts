import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: { main: "#e88f00" },
    background: {
      default: grey[50],
    },
  },
  typography: {
    fontFamily: "'Source Sans 3', sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          textTransform: "capitalize",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "md",
      },
    },
  },
});

export default theme;
