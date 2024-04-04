import { Stack, Typography } from "@mui/material";
import { ReactElement } from "react";

interface LabelWrapperProps {
  label: string;
  children: ReactElement;
}

const LabelWrapper = ({ label, children }: LabelWrapperProps) => {
  return (
    <Stack alignItems="flex-start" color={(theme) => theme.palette.grey[800]}>
      <Typography fontSize={13}>{label}</Typography>
      {children}
    </Stack>
  );
};
export default LabelWrapper;
