import { Box, BoxProps } from "@mui/material";
import logo from "@/assets/logo.svg";

const Logo = (props: Omit<BoxProps, "component">) => {
  return <Box {...props} component="img" src={logo} alt="stacktags logo" />;
};
export default Logo;
