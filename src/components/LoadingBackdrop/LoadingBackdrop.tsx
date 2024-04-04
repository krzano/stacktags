import { Backdrop, CircularProgress } from "@mui/material";
import styled, { css } from "styled-components";

interface LoadingBackdropProps {
  open: boolean;
}

const LoadingBackdrop = ({ open }: LoadingBackdropProps) => {
  return (
    <StyledBackdrop open={open}>
      <CircularProgress />
    </StyledBackdrop>
  );
};

const StyledBackdrop = styled(Backdrop)`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: grid;
    place-content: center;
    pointer-events: all;
    border-radius: ${theme.shape.borderRadius}px;
  `}
`;

export default LoadingBackdrop;
